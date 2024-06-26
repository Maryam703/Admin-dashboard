import { Outlet } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="container">
     <div className='menu-bar'><Sidebar /></div>
     <div className='main'><Outlet /></div>
    </div>
  );
}

export default App;
