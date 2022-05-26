import React, {useState, useEffect} from 'react';
import {Container} from 'react-bootstrap'
import EventCard from './EventCard'

function Events(){
    const [yourEvents, setYourEvents] = useState([])

    useEffect(()=>{
        fetch('/api/your_groups_events')
        .then(res=>res.json())
        .then(res=> setYourEvents(res))
    },[])
    return (
        <Container >

            {yourEvents.map(event=><EventCard event={event} showGroup={true}/>)}
        </Container>
    )
}

export default Events