import React, {useState,useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'

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
         <div>
             <HomeLoggedIn/>
             
         </div>
     
     )}   
}

export default Home