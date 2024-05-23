import { Outlet } from 'react-router-dom';

import MainNavBar from '../components/MainNavBar/MainNavBar';



import './DefaultLayout.css';

const DefaultLayout = () => {


  return (
    <div className="default-layout">
      <MainNavBar/>
      <Outlet />
    </div>
  )
}

export default DefaultLayout;