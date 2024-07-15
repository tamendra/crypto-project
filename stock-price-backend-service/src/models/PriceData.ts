import mongoose from 'mongoose';

const dataSchema = new mongoose.Schema({
  symbol: { type: String, required: true },
  price: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now }
});

export const PriceDataModel = mongoose.model('CoinPrice', dataSchema);
