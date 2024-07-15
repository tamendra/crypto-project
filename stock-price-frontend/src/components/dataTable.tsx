import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store/store';
import { fetchData } from '../store/dataSlice';

const DataTable = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { symbol, data } = useSelector((state: RootState) => state.data);

  useEffect(() => {
    dispatch(fetchData(symbol));
    const interval = setInterval(() => {
      dispatch(fetchData(symbol));
    }, 10 * 1000);

    return () => clearInterval(interval);
  }, [dispatch, symbol]);

  return (
    <div>
      <h1>Real-Time Price Data for {symbol}</h1>
      <table>
        <thead>
          <tr>
            <th>Price</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry) => (
            <tr key={entry.timestamp}>
              <td>{entry.price}</td>
              <td>{new Date(entry.timestamp).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
