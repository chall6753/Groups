import React from 'react';
import {Container} from 'react-bootstrap'
import {useSelector} from 'react-redux'
import EventCard from './EventCard'


function Events(){

        const events = useSelector(state => state.events)
        console.log(events)
    return (
        <Container >
            
            {events.map(event=><EventCard event={event}/>)}
            
        </Container>
    )
}

export default Events