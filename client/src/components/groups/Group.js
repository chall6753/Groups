import React, {useState,useEffect} from "react";
import {Container, Button, Card} from "react-bootstrap"
import {useParams, useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import GroupChats from '../Chats/GroupChats'
import {deleteGroup, showGroups} from '../../reducers/groupsReducer'
import {showChats} from '../../reducers/chatsReducer'
import CreateEvent from './../Events/CreateEvent'
import EventCard from './../Events/EventCard'
import SlideShow from "../Pictures/SlideShow";



function Group(){
    
    const dispatch = useDispatch()
    const group_id = useParams().id
    const navigate = useNavigate()
    const group = useSelector(state => state.groups.find((group)=>group.id == group_id))
    const groupEvents = useSelector(state => state.events.filter((event)=>event.group_id == group_id)).slice(0,3)
    const chats = useSelector(state => state.chats).filter((chat)=> chat.group?.id == group_id && chat.event?.id == null)

    console.log(groupEvents)

    function leaveGroup(){
        fetch('/api/leave_group',{
            method: 'PATCH',
            headers: {"Content-Type": 'application/json'},
            body: JSON.stringify({
                group_id: group.id 
            })
        })
        .then(res=> {if (res.ok){
            dispatch(showGroups())
            dispatch(showChats())
            navigate('/')
        }})
    } 
    
    if (group != undefined){
        let startDate = new Date(group.start_date)
        let endDate = new Date(group.end_date)
        return (
        <Container className='groupPage'>
            <Card style={{margin:'10px', background: 'rgba(255,255,255,0.5)', display: 'flex', alignItems: 'center'}}>
                <h1>{group.name}</h1>
                <h4>Where: {group.location}</h4>
                <h4>Start Date: {startDate.getMonth()+'-'+startDate.getDate()+'-'+startDate.getFullYear()}</h4>
                <h4>End Date: {endDate.getMonth()+'-'+endDate.getDate()+'-'+endDate.getFullYear()}</h4>
                <p>{group.description}</p>
                {group.can_modify_group?<Button style={{width: '200px'}} onClick={()=> dispatch(deleteGroup(group_id, navigate))}>Delete</Button>:<Button onClick={()=>leaveGroup()} style={{width:'200px'}}>Leave Group</Button>}
            </Card>
            <Card style={{margin:'10px', background: 'rgba(255,255,255,0.5)'}} >
                <h1 onClick={()=>navigate(`/group_events/${group_id}`)} style={{cursor: 'pointer'}}>Events</h1>
                {groupEvents.map(event=><EventCard event={event}/>)}
            </Card>  
            
            
            <Card style={{margin:'10px', background: 'rgba(255,255,255,0.5)'}} >
                <h1 onClick={()=>navigate(`/group_chats/${group_id}`)} style={{cursor: 'pointer'}}>Chats</h1>
                <GroupChats chats={chats}/>
            </Card>
            <Card style={{margin:'10px', background: 'rgba(255,255,255,0.5)'}} >
                <h1 onClick={()=>navigate(`/pictures/${group_id}`)} style={{cursor: 'pointer'}}>Pictures</h1>
                <SlideShow/>
            </Card>
            <Card style={{margin:'10px', background: 'rgba(255,255,255,0.5)', display: 'flex', alignItems: 'center'}}>
                <h1>Group Members</h1>
                {group.members.map((member)=> <Card style={{width: '200px', margin: '5px', fontWeight: 'bold'}}>{member.username}</Card>)}
            </Card>
            
            
        </Container>
        )
    }
    else{return <>loading</>}
    
}

export default Group