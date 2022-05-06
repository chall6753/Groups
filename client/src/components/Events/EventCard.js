import React from 'react';
import {Card} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'


function EventCard({event}){
    const navigate = useNavigate()
    

    return (
        <Card>
            <Card.Body onClick={()=> navigate(`/events/${event.id}`)}>
              <Card.Title >{event.name}</Card.Title> 
              <Card.Text>Time: {event.start_date}</Card.Text> 
              <Card.Text>Location: {event.location}</Card.Text> 
              <Card.Text>Descritpion: {event.description}</Card.Text> 
            </Card.Body>
            


        </Card>
    )
}

export default EventCard