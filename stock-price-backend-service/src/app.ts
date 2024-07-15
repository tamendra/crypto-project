import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import dataRoutes from './routes/dataRoutes';
import { fetchDataFromCoinCompare } from './controllers/dataController';
import cron from 'node-cron';

dotenv.config();

const app = express();

app.use(express.json());
app.use('/api/data', dataRoutes);

const PORT = process.env.PORT || 5000;
const MongoUrl = process.env.MONGO_URI || '';

mongoose.connect(MongoUrl)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

    // Fetch data every 10 secs
    cron.schedule('*/10 * * * * *', fetchDataFromCoinCompare);
  })
  .catch(err => console.log(err));
