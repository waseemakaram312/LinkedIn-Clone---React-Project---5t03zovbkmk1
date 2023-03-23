import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';


import '../styles/App.css';
import Header from './Header';
import Login from './Login';
import Feed from './Feed';
import Footer from './Footer';
import Sidebar from './Sidebar';
import RigthSidebar from './RightSidebar';
// import Firebase from './Firebase'

const App = () => {
  const user = null;



  return (
    <>
    {
      !user ? (<Login/>) : (

    

    <div nam="main">
      
      
      <BrowserRouter>
     
      <Header />
      
      <div className='app_body'>
      
        <Sidebar/>
        <Feed/>
        <RigthSidebar/>
        </div>
     
      
       
      <Routes>
          <Route path='/login' element={<Login/>}/>
      </Routes>
      
      
      
      
      <Footer/>
      
      </BrowserRouter>
    </div>
      )
    }
    </>
  )
}


export default App;
