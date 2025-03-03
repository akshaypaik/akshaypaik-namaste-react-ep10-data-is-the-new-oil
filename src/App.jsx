import { Outlet } from 'react-router-dom';
import './App.css'
import Body from './components/Body/Body';
import Header from './components/Header/Header';

function AppLayout() {

  return (
    <div className='app'>
      <Header />
      <Outlet />
    </div>
  )
}



export default AppLayout
