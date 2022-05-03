import React, {useState,useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import FeatureSlider from './FeatureSlider'
import {Container} from 'react-bootstrap'


function HomeNotLoggedIn(){
    return (
        <Container id='homeNotLoggedIn'>
                <FeatureSlider/>
            
                
                <Container id='testimonial' >
                <h3>Testimonial</h3>
                <p>I use group for al of my friend trips and it has upped our vacationin skills! -Tommy P.</p>
                </Container>

                <Container id='whyGroups'>
                <h1>Why use Groups?</h1>
                <p>Group trips can get hectic real quick. When you have a group of peole all trying to plan last minute things never go smoothly. Trying to communicate with everyone is not easy. In comes groups where you can set up a group where everyone can see the trip plans, you can chat where everyone can chime in and lastly a calendar to create and share events. </p>
                </Container>
            
           
            
            
        </Container>
    )
}

export default HomeNotLoggedIn