
// import { Outlet } from 'react-router-dom';

import Navbar from './component/navbar';
import Home from './component/home';
// import LoginSignup from './component/loginSignup';
import LandingPage from './component/landingPage';
const App = () => {
  return (
    <>
      <Navbar />
      {/* <LoginSignup /> */}
      <Home />
      {/* <LandingPage/> */}

    </>
  );
}

export default App;
