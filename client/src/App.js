import React, { useEffect } from 'react'
import {Routes, Route, useNavigate} from 'react-router-dom'
import Signup from './components/sessions/Signup'
import Home from './components/Home/Home'
import Login from './components/sessions/Login'
import SideNav from './components/Navigation/SideNav'
import CreateGroup from './components/groups/CreateGroup'
import Groups from './components/groups/Groups'
import Header from './components/Navigation/Header'
import './App.css';
import {useDispatch, useSelector} from 'react-redux'
import { setCurrentUser } from './reducers/sessionsReducer'
import {showYourGroups} from './reducers/groupsReducer'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const dispatch = useDispatch()
   const currentUser = useSelector(state => state.session)
  useEffect(()=>{
    dispatch(setCurrentUser())
  },[]);
  useEffect(()=>{dispatch(showYourGroups())},[currentUser]);
   
  
 
  return (
    <div className="App">
      <Header/>
      {currentUser.id ==''? null : <SideNav/>}
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
