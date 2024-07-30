// we want both a schema for MongoDB
// AND a schema for TypeScript

import mongoose, { mongo } from "mongoose";

import { ICharacter } from "./types";

const characterSchema = new mongoose.Schema<ICharacter>({
    name: {
        type: String,
        required: true,
        unique: true,
    },

    debutYear: {
        type: Number,
        required: true,
        unique: true,
    },

    debutFilm: {
        type: String,
        required: true,
        unique: true,
    }
})

const Character = mongoose.model('Character', characterSchema);

export default Character;