import React, {useState,useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Logout from './sessions/LogoutButton'



function Home(){
    
    const currentUser = useSelector(state => state.session)
    
        return (
            <div>
            hello 
            <p>{currentUser.username}</p>
            <Logout></Logout>
            </div>
        )
}

export default Home