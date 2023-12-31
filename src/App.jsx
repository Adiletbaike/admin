import React from 'react'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Constants/Layout';
import Groups from './components/Groups';
import Guide from './components/Guide';
import Hotel from './components/Hotel';
import Dashboard from './components/Dashboard';
import Login from './components/Auth/Login';
import MembersGroup from './components/MembersGroup';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Dashboard/>}/> 
          <Route path='/groups' element={<Groups/>}/> 
          <Route path='/guide' element={<Guide/>}/> 
          <Route path='/hotels' element={<Hotel/>}/> 
          <Route path='/members' element={<MembersGroup/>}/> 
        </Route>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App