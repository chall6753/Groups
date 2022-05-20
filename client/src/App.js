import React, { useEffect } from 'react'
import {Routes, Route, useNavigate} from 'react-router-dom'
import Signup from './components/sessions/Signup'
import Home from './components/Home/Home'
import Login from './components/sessions/Login'
import SideNav from './components/Navigation/SideNav'
import CreateGroup from './components/groups/CreateGroup'
import Groups from './components/groups/Groups'
import Group from './components/groups/Group'
import Header from './components/Navigation/Header'
import GroupChatsPage from './components/Chats/GroupChatsPage'
import Events from './components/Events/Events'
import Event from './components/Events/Event'
import GroupEvents from './components/Events/GroupEvents'
import Pictures from './components/Pictures/Pictures'
import './App.css';
import {useDispatch, useSelector} from 'react-redux'
import { setCurrentUser } from './reducers/sessionsReducer'
import {showGroups} from './reducers/groupsReducer'
import {showEvents} from './reducers/eventsReducer'
import {showChats} from './reducers/chatsReducer'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const dispatch = useDispatch()
   const currentUser = useSelector(state => state.session)
  useEffect(()=>{dispatch(setCurrentUser())},[]);
  useEffect(()=>{dispatch(showGroups())},[currentUser]);
  // useEffect(()=>{dispatch(showEvents())},[]);
  useEffect(()=>{dispatch(showChats())},[])
  
 
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
        <Route path='/groups/:id' element={<Group/>}/> 
        <Route path='/group_chats/:id' element={<GroupChatsPage/>}/>
        <Route path='/events' element={<Events/>}/>
        <Route path='/events/:id' element={<Event/>}/>
        <Route path='/group_events/:id' element={<GroupEvents/>}/>
        <Route path='/pictures/:id' element={<Pictures/>}/>
      </Routes>
    </div>
  );
}

export default App;
