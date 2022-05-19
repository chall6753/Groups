import React, {useState,useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'

import {Container, Card, NavLink} from 'react-bootstrap'
import ChatCard from '../Chats/ChatCard'

const HomeLoggedIn = () => {
    const currentUser = useSelector(state => state.session)
    const groups = useSelector(state => state.groups)
    const events = useSelector(state => state.events).filter((event)=> event.user_id == currentUser.id).slice(0,4)
    const chats = useSelector(state => state.chats).filter((chat)=> chat.user_id == currentUser.id).slice(0,4)
    const navigate = useNavigate()

    if (groups.error){
        return <p>loading...</p>
    }
    else{
        const yourGroups = groups.filter((group) => group.is_member).slice(0,4)
        
        return (
        <Container className='homeLoggedIn'>
            <Card style={{margin:'10px', background: 'rgba(255,255,255,0.5)'}}>
                <h1>Your Groups</h1>
                {yourGroups.map((group) => {
                    let startDate = new Date(group.start_date)
                   return(
                    <Card onClick={()=>navigate(`/groups/${group.id}`)} style={{margin:'10px'}}>
                        <Card.Body>
                            <Card.Title>{group.name}</Card.Title>
                            <Card.Text>
                                where: {group.location}<br/>
                                when: {startDate.getMonth()+'-'+startDate.getDate()+'-'+startDate.getFullYear() }
                            </Card.Text>
                        </Card.Body>
                    </Card>
                   ) 
                })}
            </Card>
            <Card style={{margin:'10px', background: 'rgba(255,255,255,0.5)'}} onClick={()=> navigate(`/events`)}>
                <h1>Upcoming Events</h1>
                {events.map((event) => {
                    return(
                        <Card onClick={()=>navigate(`/events/${event.id}`)} style={{margin:'10px'}}>
                            <Card.Body>
                                <Card.Title>{event.name}</Card.Title>
                                <Card.Text>
                                    where: {event.location}<br/>when: {event.start_time}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    )}
                )}
            </Card>
            <Card style={{margin:'10px',background: 'rgba(255,255,255,0.5)'}}>
                <h1>Recent Chats</h1>
                {chats.map((chat) => <ChatCard chat={chat}/>) }
            </Card>
        </Container>
    )
    }
    
}

export default HomeLoggedIn