import { MongoClient } from "mongodb";
import { Database } from "../lib/types";

export const connectDatabase = async(): Promise<Database> => {
    const client = await MongoClient.connect('mongodb://localhost:27017')

    const db = client.db('main');

    return {
        listings: db.collection('test_listings')
    };
};

