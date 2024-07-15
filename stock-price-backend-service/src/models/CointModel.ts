import mongoose from 'mongoose';

const coinDataSchema = new mongoose.Schema({
  symbol: { type: String, required: true },
  name: { type: String, required: true },
  timestamp: { type: Date, default: Date.now }
});

export const CoinDataModel = mongoose.model('coin', coinDataSchema);
