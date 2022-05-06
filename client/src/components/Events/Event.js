import React, {useState, useEffect} from 'react';
import {Container, Card} from 'react-bootstrap'
import {useParams, useNavigate} from 'react-router-dom'
import CreateChat from '../Chats/CreateChat';
import EventChats from '../Chats/EventChats'

function Event(){

    const [event, setEvent] = useState('')
    const navigate = useNavigate()
    useEffect(()=>{
        fetch(`/events/${eventId}`)
        .then(res=> res.json())
        .then(res=> setEvent(res))
    },[])

    const eventId = useParams().id
    console.log(event)
    return (
        <Container>
            
            <Card>
            <Card.Body>
              <Card.Title >{event.name}</Card.Title> 
              <Card.Text>Time: {event.start_date}</Card.Text> 
              <Card.Text>Location: {event.location}</Card.Text> 
              <Card.Text>Descritpion: {event.description}</Card.Text> 
            </Card.Body>
            
        </Card>
        
        <EventChats event={event}/>
        </Container>
    )
}

export default Event