import express from 'express';

import connectToMongoDB from './db/mongodb';
import Character from './Character';
import { ErrorPacket, ICharacter } from './types';

const app = express()

app.use(express.json());

app.get('/', (_, res) => {
    res.send('hello'); // should ideally send them directions for how to use the API
});

// errorPacket has:
//   message: 'failure in ____'
//   payload: error

function createErrorPacket(failureMessage: string, error: Error): ErrorPacket {
    return {
        message: failureMessage,
        payload: error,
    }
}

app.get('/api/characters', async (_, res) => {
    try {
        const characters = await Character.find({});
        res.json({message: 'success', payload: characters});
    } catch (error) {
        const errorPacket = createErrorPacket('failure in all character', error);
        console.log(errorPacket);
        res.json(errorPacket);
    }
})

app.post('/api/characters', async (req, res) => {
    try {
        const newCharacter: ICharacter = req.body;
        await Character.create(newCharacter);
        res.json(newCharacter);
    } catch (error) {
        const errorPacket = createErrorPacket('failure in character creation', error);
        console.log(errorPacket);
        res.json(errorPacket);
    }
})

app.put('/api/characters/changeName/:id', async (req, res) => {
    const newName: string = req.body.name;
    const id = req.params.id;
    const character = await Character.findOne({_id: id});
    const updatedCharacter: ICharacter = {
        name: newName,
        debutYear: character.debutYear,
        debutFilm: character.debutFilm,
    }

    await Character.updateOne({_id: id}, updatedCharacter);
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
    connectToMongoDB();
})