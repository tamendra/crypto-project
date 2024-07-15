import { useDispatch, useSelector } from 'react-redux';
import { setSymbol } from '../store/dataSlice';
import { RootState } from '../store/store';

const SymbolSelector = () => {
  const dispatch = useDispatch();
  const symbol = useSelector((state: RootState) => state.data.symbol);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSymbol(event.target.value));
  };

  return (
    <div>
      <label htmlFor="symbol">Choose a stock or crypto:</label>
      <select id="symbol" value={symbol} onChange={handleChange}>
        <option value="BTC">Bitcoin</option>
        <option value="ETH">Ethereum</option>
        <option value="DOGE">Dogecoin</option>
        <option value="SHIB">Shiba Inu</option>
        <option value="SOL">Solana</option>
      </select>
    </div>
  );
};

export default SymbolSelector;
