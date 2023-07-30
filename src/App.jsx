
import { Outlet } from 'react-router-dom';
import Navbar from './component/navbar';

const App = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
