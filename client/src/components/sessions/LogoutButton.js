import React from 'react'
import {logout} from '../../reducers/sessionsReducer';
import {useDispatch, useSelector} from 'react-redux'

function LogoutButton(){
    const dispatch= useDispatch()
    const currentUser = useSelector(state => state.session)
    console.log(currentUser.id)
    function handleLogout(e){
        e.preventDefault();
        dispatch(logout())
    }

    if (currentUser.id){
       return (
        <>
            <button onClick={handleLogout}>logout</button>
        </>   
    ) 
    }
    else{
        return(
            <></>
        )
    }


    
}

export default LogoutButton