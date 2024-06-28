import React from 'react'
import { Outlet, useOutlet } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import "./Admindashboard.css"
import Dashboard from '../Dashboard/Dashboard';

export default function Admindashboard() {
  const Outlet = useOutlet();
  return (
    <div className="container">
    <div className='menu-bar'><Sidebar /></div>
    <div className='main'>{Outlet || <Dashboard />}</div>
   </div>
  )
}
