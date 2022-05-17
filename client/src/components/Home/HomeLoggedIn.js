import React, {useState,useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'

import {Container, Card, NavLink} from 'react-bootstrap'
import ChatCard from '../Chats/ChatCard'

const HomeLoggedIn = () => {

    
    const groups = useSelector(state => state.groups)
    
 
    

    const events = useSelector(state => state.events)
    const chats = useSelector(state => state.chats).slice(0,5)
    const navigate = useNavigate()

    if (groups.error){
        return <p>loading...</p>
    }
    else{
        const yourGroups = groups.filter((group) => group.is_member)
        
        return (
        <Container>
            <Container >
                <h1>Your Groups</h1>
                {yourGroups.map((group) => {
                    let startDate = new Date(group.start_date)
                   return(
                    <Card onClick={()=>navigate(`/groups/${group.id}`)}>
                    {group.name}
                    <br/>where: {group.location}
                    <br/>when: {startDate.getMonth()+'-'+startDate.getDate()+'-'+startDate.getFullYear()}</Card>) }

                   ) 
                }
            </Container>
            <Container>
                <h1>Upcoming Events</h1>
                {events.map((event) => <Card onClick={()=>navigate(`/events/${event.id}`)}>{event.name}<br/>where: {event.location}<br/>when: {event.start_time}</Card>) }
            </Container>
            <Container>
                <h1>Recent Chats</h1>
                {chats.map((chat) => <ChatCard chat={chat}/>) }
            </Container>
        </Container>
    )
    }
    
}

export default HomeLoggedIn