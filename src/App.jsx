
import { Outlet } from 'react-router-dom';
import AddTask from './component/comp/addTask.jsx';
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
