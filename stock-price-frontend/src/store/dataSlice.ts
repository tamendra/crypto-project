import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

interface DataState {
  symbol: string;
  data: Array<{ price: number; timestamp: string }>;
}

const initialState: DataState = {
  symbol: 'BTC',
  data: [],
};

export const fetchData = createAsyncThunk(
  'data/fetchData',
  async (symbol: string) => {
    const response = await axios.get(`/api/data/${symbol}`);
    return response.data;
  }
);

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setSymbol: (state, action: PayloadAction<string>) => {
      state.symbol = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export const { setSymbol } = dataSlice.actions;
export default dataSlice.reducer;
