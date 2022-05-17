import React from 'react';
import {Container} from 'react-bootstrap'
import {useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'
import EventCard from './EventCard'
import CreateEvent from './CreateEvent'


function GroupEvents(){
    const group_id = useParams().id
    const groupEvents = useSelector(state => state.events.filter((event)=>event.group_id == group_id))
    

   if (groupEvents !=undefined){
       
        return (
        <Container>
            <CreateEvent group_id={group_id}/>
            {groupEvents.map(event=><EventCard event={event}/>)}
            
        </Container>
    )
   }
   
}

export default GroupEvents