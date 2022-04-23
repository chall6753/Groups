import React from 'react'
import {Routes, Route, useNavigate} from 'react-router-dom'
import Signup from './components/sessions/Signup'
import Home from './components/Home'
import Login from './components/sessions/Login'
import Navbar from './components/Navbar'
import CreateGroup from './components/groups/CreateGroup'
import Groups from './components/groups/Groups'
import './App.css';
import {useDispatch, useSelector} from 'react-redux'
import { setCurrentUser } from './reducers/sessionsReducer'
import {showYourGroups} from './reducers/groupsReducer'
//import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const dispatch = useDispatch()
  dispatch(setCurrentUser())
  dispatch(showYourGroups())
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/create_group' element={<CreateGroup/>}/>
        <Route path='/group_list' element={<Groups/>}/>
      </Routes>
    </div>
  );
}

export default App;
