import mongoose, { mongo } from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
mongoose.set('strictQuery', false);

async function connectToMongoDB() {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('MongoDB connected!');
    } catch (error) {
        console.log('db connection failed: ', error);
    }
}

export default connectToMongoDB;