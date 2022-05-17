import React from 'react';
import {Card} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'


function EventCard({event}){
    const navigate = useNavigate()
    const startDate = new Date(event.start_date)

    return (
        <Card>
            <Card.Body onClick={()=> navigate(`/events/${event.id}`)}>
              <Card.Title >{event.name}</Card.Title> 
              <Card.Text>Date: {startDate.toLocaleDateString()}</Card.Text> 
              <Card.Text>Time: {startDate.toLocaleTimeString()}</Card.Text>
              <Card.Text>Location: {event.location}</Card.Text> 
              <Card.Text>Descritpion: {event.description}</Card.Text> 
            </Card.Body>
            


        </Card>
    )
}

export default EventCard