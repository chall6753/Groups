import React from 'react';
import {Card} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'


function EventCard({event, showGroup}){
    const navigate = useNavigate()
    const startDate = new Date(event.start_date)
    console.log(showGroup)
    return (
        <Card style={{margin:'15px'}}>
            <Card.Body onClick={()=> navigate(`/events/${event.id}`)}>
                <Card.Title >{showGroup?event.group.name:null}</Card.Title> 
                <Card.Title >{event.name}</Card.Title> 
                <Card.Text>
                    Date: {startDate.toLocaleDateString()}<br/>
                    Time: {startDate.toLocaleTimeString()}<br/>
                    Location: {event.location}<br/>
                    Descritpion: {event.description}<br/>
                </Card.Text> 
              
            </Card.Body>
            


        </Card>
    )
}

export default EventCard