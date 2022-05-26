import React from 'react'
import {useSelector} from 'react-redux'
import HomeNotLoggedIn from './HomeNotLoggedIn'
import HomeLoggedIn from './HomeLoggedIn'

function Home(){
    const currentUser = useSelector(state => state.session)

    if(currentUser.id == ''){
        return (
            <HomeNotLoggedIn/>
        )
    }
     else{return (
             <HomeLoggedIn/>
     )}   
}

export default Home