import mongoose from 'mongoose';

const errorDataSchema = new mongoose.Schema({
  timestamp: { type: Date, default: Date.now },
  symbol: { type: String, required: false },
  error: { type: Object, required: true }
});

export const ErrorDataModel = mongoose.model('ErrorLog', errorDataSchema);
