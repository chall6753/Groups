import React from 'react';
import {Card} from 'react-bootstrap'


function EventCard({event}){

    console.log(event.name)

    return (
        <Card>
            <Card.Body>
              <Card.Title>{event.name}</Card.Title> 
              <Card.Text>Time: {event.start_date}</Card.Text> 
              <Card.Text>Location: {event.location}</Card.Text> 
              <Card.Text>Descritpion: {event.description}</Card.Text> 
            </Card.Body>
            


        </Card>
    )
}

export default EventCard