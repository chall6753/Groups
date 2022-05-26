import React from 'react'
import {logout} from '../../reducers/sessionsReducer';
import {useDispatch, useSelector} from 'react-redux'

function LogoutButton(){
    const dispatch= useDispatch()
    const currentUser = useSelector(state => state.session)

    function handleLogout(e){
        e.preventDefault();
        dispatch(logout())
    }

    if (currentUser.id){
       return (
        <div>
            <button onClick={handleLogout}>logout</button>
        </div>   
        ) 
    }
    else{
        return null
    } 
}

export default LogoutButton