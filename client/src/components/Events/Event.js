import React, {useState, useEffect} from 'react';
import {Container, Card} from 'react-bootstrap'
import {useParams, useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import CreateChat from '../Chats/CreateChat';
import EventChats from '../Chats/EventChats'
import {showEvent} from '../../reducers/eventReducer'

function Event(){
    const eventId = useParams().id
    const event = useSelector(state => state.event)
    const eventChats = useSelector(state => state.chats).filter((chat) => chat.event?.id == eventId)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(()=>{
        dispatch(showEvent(eventId))
    },[])
    
    

    if(event != undefined){
        const startDate = new Date(event.start_date)
        console.log(event)
       return (
        <Container>
            <Card>
                <Card.Body>
                <Card.Title >{event.name}</Card.Title> 
                <Card.Text>Date: {startDate.toLocaleDateString()}</Card.Text> 
                <Card.Text>Time: {startDate.toLocaleTimeString()}</Card.Text> 
                <Card.Text>Location: {event.location}</Card.Text> 
                
                <Card.Text>Descritpion: {event.description}</Card.Text> 
                </Card.Body>
            </Card>
            <h1>Event Chats</h1>
            <CreateChat event_id={eventId}/>
            <EventChats chats={eventChats}/>
        </Container>
    ) 
    }
    else{return null}
}

export default Event