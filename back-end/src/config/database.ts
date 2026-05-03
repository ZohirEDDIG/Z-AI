import mongoose, { Connection } from 'mongoose';

const connectDB = async (): Promise<void> => {
   const uri = process.env.MONGODB_URI;

    if (!uri) {
        throw new Error('MONGODB_URI is not defined in environment variables');
    }

    try {
        await mongoose.connect(uri);
        console.log('Mongodb connected');
    } catch (error) {
        console.error('MongoDB connection error: ', error);
        process.exit(1);
    }
};

const db: Connection = mongoose.connection;   

db.on('disconnected', () => {
    console.warn('MongoDB disconnected');
});

db.on('error', (err: Error) => {
    console.error('MongoDB error:', err);
});

export default connectDB;