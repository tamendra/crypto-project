import axios from 'axios';
import { Request, Response } from 'express';
import { ErrorDataModel, PriceDataModel } from '../models';

export const fetchDataFromCoinGecko = async () => {
  try {
    const symbols = ['bitcoin', 'ethereum'];
    const promises = symbols.map(async (symbol) => {
      try {
        const response = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${symbol}&vs_currencies=usd`);
        const data = response.data;
        const price = data[symbol]?.usd; // Ensure to handle undefined case
        if (price !== undefined) {
          const newData = new PriceDataModel({ symbol, price });
          await newData.save();

          console.log(`Data fetched and stored successfully for symbol ${symbol}`);
        } else {
          console.error(`Price data not found for symbol: ${symbol}`);
          const newErrorData = new ErrorDataModel({ error: { message: `Price data not found for symbol: ${symbol}` }, symbol });
          await newErrorData.save();
        }
      } catch (error: any) {
        console.error('Error fetching data:', error?.message);
        const newErrorData = new ErrorDataModel({ error: JSON.parse(JSON.stringify(error)), symbol: '' });
        await newErrorData.save();
      }
    });

    await Promise.allSettled(promises);
  } catch (error: any) {
    console.error('Error fetching data:', error.message);
    const newErrorData = new ErrorDataModel({ error: JSON.parse(JSON.stringify(error)), symbol: '' });
    await newErrorData.save();
  }
};

/** 
 * data source: crypto compare 
 * 
*/
export const fetchDataFromCoinCompare = async () => {
  try {
    const symbols = ['BTC', 'ETH', 'DOGE', 'SHIB', 'SOL'];
    const promises = symbols.map(async (symbol) => {
      try {
        const response = await axios.get(`https://min-api.cryptocompare.com/data/pricemulti?fsyms=${symbols.join(',')}&tsyms=USD`);
        const data = response.data;
        const price = data[symbol]?.USD; // Ensure to handle undefined case
        if (price !== undefined) {
          const newData = new PriceDataModel({ symbol, price });
          await newData.save();

          console.log(`Data fetched and stored successfully for symbol ${symbol}`);
        } else {
          console.error(`Price data not found for symbol: ${symbol}`);
          const newErrorData = new ErrorDataModel({ error: { message: `Price data not found for symbol: ${symbol}` }, symbol });
          await newErrorData.save();
        }
      } catch (error: any) {
        console.error('Error fetching data:', error?.message);
        const newErrorData = new ErrorDataModel({ error: JSON.parse(JSON.stringify(error)), symbol: '' });
        await newErrorData.save();
      }
    });

    await Promise.allSettled(promises);
  } catch (error: any) {
    console.error('Error fetching data:', error.message);
    const newErrorData = new ErrorDataModel({ error: JSON.parse(JSON.stringify(error)), symbol: '' });
    await newErrorData.save();
  }
};


export const getData = async (req: Request, res: Response) => {
  try {
    const { symbol } = req.params;
    const data = await PriceDataModel.find({ symbol }).sort({ timestamp: -1 }).limit(20);
    res.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    res.set('Pragma', 'no-cache');
    res.set('Expires', '0');
    res.set('Surrogate-Control', 'no-store');
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: `Error fetching data: ${error}`});
  }
};

// export const getCoinListData = async () => {
//   const options = {
//     method: 'GET',
//     url: 'https://api.coingecko.com/api/v3/coins/list?status=active',
//     headers: { accept: 'application/json' }
//   };

//   try {
//     const response = await axios.request(options);

//     await Promise.all(response.data.map(async (coin: ICoin) => {
//       try {
//         if (coin.symbol && coin.name) {
//           const newData = new CoinDataModel({ symbol: coin.symbol, name: coin.name });
//           await newData.save();
//         }
//       } catch (error) {
//         console.error('Error saving coin data:', error);
//         const newErrorData = new ErrorDataModel({ error: JSON.parse(JSON.stringify(error)), symbol: '' });
//         await newErrorData.save();
//       }
//     }));
//   } catch (error: any) {
//     console.error('Error fetching data:', error.message);
//     const newErrorData = new ErrorDataModel({ error: JSON.parse(JSON.stringify(error)), symbol: '' });
//     await newErrorData.save();
//   }
// };
