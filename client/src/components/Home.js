import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'



function Home(){
const currentUser = useSelector(state => state.currentUser)

    return (
        <div>
        hello 
        <p>{currentUser.username}</p>
        </div>
    )
}

export default Home