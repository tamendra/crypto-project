import type { NextPage } from 'next';
import DataTable from '../components/dataTable';
import SymbolSelector from '../components/symbolSelector';

const Home: NextPage = () => {
  return (
    <div>
      <SymbolSelector />
      <DataTable />
    </div>
  );
};

export default Home;
