import React from 'react'
import {Routes, Route, useNavigate} from 'react-router-dom'
import Signup from './components/Signup'
import Home from './components/Home'
import Login from './components/Login'
import Navbar from './components/Navbar'
import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      
      </Routes>
    </div>
  );
}

export default App;
