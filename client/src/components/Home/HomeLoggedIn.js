import React, {useState,useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'

import {Container, Card, NavLink} from 'react-bootstrap'
import ChatCard from '../Chats/ChatCard'

const HomeLoggedIn = () => {

    const yourGroups = useSelector(state => state.groups).filter((group) => group.is_member)
    const events = useSelector(state => state.events)
    const chats = useSelector(state => state.chats).slice(0,5)
    const navigate = useNavigate()
    console.log(yourGroups)
    return (
        <Container>
            <Container >
                <h1>your groups</h1>
                {yourGroups.map((group) => <Card onClick={()=>navigate(`/groups/${group.id}`)}>{group.name}<br/>where: {group.location}<br/>when: {group.start_date}</Card>) }
            </Container>
            <Container>
                <h1>upcoming events</h1>
                {events.map((event) => <Card onClick={()=>navigate(`/events/${event.id}`)}>{event.name}<br/>where: {event.location}<br/>when: {event.start_time}</Card>) }
            </Container>
            <Container>
                <h1>recent chats</h1>
                {chats.map((chat) => <ChatCard chat={chat}/>) }
            </Container>
        </Container>
    )
}

export default HomeLoggedIn