import React, {useState,useEffect} from "react";
import {Container, Button, Card} from "react-bootstrap"
import {useParams, useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import GroupChats from '../Chats/GroupChats'
import {deleteGroup} from '../../reducers/groupsReducer'
import CreateEvent from './../Events/CreateEvent'
import EventCard from './../Events/EventCard'


function Group(){
    
    const dispatch = useDispatch()
    const group_id = useParams().id
    const navigate = useNavigate()
    const group = useSelector(state => state.groups.find((group)=>group.id == group_id))
    const groupEvents = useSelector(state => state.events.filter((event)=>event.group_id == group_id))
    const chats = useSelector(state => state.chats)

    console.log(group)
    
    
    if (group != undefined){
        let startDate = new Date(group.start_date)
        let endDate = new Date(group.end_date)
        return (
        <Container className='groupPage'>
            <Card>
                <Card.Title>{group.name}</Card.Title>
                <h2>Where: {group.location}</h2>
                <h4>Start Date: {startDate.getMonth()+'-'+startDate.getDate()+'-'+startDate.getFullYear()}</h4>
                <h4>End Date: {endDate.getMonth()+'-'+endDate.getDate()+'-'+endDate.getFullYear()}</h4>
                
                <p>{group.description}</p>
            </Card>
            <Card onClick={()=>navigate(`/group_events/${group_id}`)}>
                <Card.Title>events</Card.Title>
                {groupEvents.map(event=><EventCard event={event}/>)}
            </Card>  
            
            
            <Card onClick={()=>navigate('/')}>
                <Card.Title>Chats</Card.Title>
                <GroupChats chats={chats.slice(0,5)}/>
            </Card>
            <Card>
                {group.can_modify_group?<Button onClick={()=> dispatch(deleteGroup(group_id, navigate))}>Delete</Button>:null}
            </Card>
        </Container>
        )
    }
    else{return <>loading</>}
    
}

export default Group