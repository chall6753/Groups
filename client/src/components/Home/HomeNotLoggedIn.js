import React, {useState,useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import FeatureSlider from './FeatureSlider'
import {Container, Card} from 'react-bootstrap'


function HomeNotLoggedIn(){
    return (
        <Container id='homeNotLoggedIn'>
            <FeatureSlider/>
            <Card id='testimonial' >
                <h3>Testimonial</h3>
                <p>I use Groups for all of my trips and it has made them much more enjoyable! -Tommy P.</p>
            </Card>
            <Card id='whyGroups'>
                <h1>Why use Groups?</h1>
                <p>Group trips can get hectic real quick. When you have a group of people all trying to plan last minute things it never goes smoothly. Trying to communicate with everyone is not easy. In comes groups where you can create a group where everyone can see the trip details, create events, chat with the group and share pictures. </p>
            </Card> 
        </Container>
    )
}

export default HomeNotLoggedIn