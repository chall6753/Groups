import React, {useState,useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'

import {Container, Card, NavLink} from 'react-bootstrap'
import ChatCard from '../Chats/ChatCard'

const HomeLoggedIn = () => {
    const currentUser = useSelector(state => state.session)
    const groups = useSelector(state => state.groups)
    const chats = useSelector(state => state.chats).filter((chat)=> chat.user_id == currentUser.id).slice(0,4)
    const navigate = useNavigate()
    const [yourGroupsEvents, setYourGroupsEvents] = useState([])
    const [yourGroupsChats, setYourGroupsChats] = useState([])
    console.log(chats)

    useEffect(()=>{
        fetch('/api/your_groups_events')
        .then(res=>res.json())
        .then(res=> setYourGroupsEvents(res))
    },[])
    
    useEffect(()=>{
        fetch('/api/your_groups_chats')
        .then(res=>res.json())
        .then(res=> setYourGroupsChats(res))
    },[])
    
    if (groups.error){
        return <p>loading...</p>
    }
    else{
        const yourGroups = groups.filter((group) => group.is_member).slice(0,4)
        console.log(yourGroupsEvents)
        return (
        <Container className='homeLoggedIn'>
            <Card style={{margin:'10px', background: 'rgba(255,255,255,0.5)'}}>
                <h1>Your Groups</h1>
                {yourGroups.map((group) => {
                    let startDate = new Date(group.start_date)
                   return(
                    <Card onClick={()=>navigate(`/groups/${group.id}`)} style={{margin:'10px', cursor: 'pointer'}}>
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
            <Card style={{margin:'10px', background: 'rgba(255,255,255,0.5)'}} >
                <h1 style={{cursor: 'pointer'}}onClick={()=> navigate(`/events`)}>Upcoming Events</h1>
                {yourGroupsEvents.map((event) => {
                    let startDate = new Date(event.start_date)
                    return(
                        <Card onClick={()=>navigate(`/events/${event.id}`)} style={{margin:'10px', cursor: 'pointer'}}>
                            <Card.Body>
                                <h5>Group: {event.group.name}</h5>
                                <h5>Event: {event.name}</h5>
                                <Card.Text>
                                    where: {event.location}<br/>
                                    when: {startDate.getMonth()+'-'+startDate.getDate()+'-'+startDate.getFullYear() }
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    )}
                )}
            </Card>
            <Card style={{margin:'10px',background: 'rgba(255,255,255,0.5)'}}>
                <h1>Recent Chats</h1>
                {yourGroupsChats.slice(0,4).map((chat) => <ChatCard chat={chat}/>) }
            </Card>
        </Container>
    )
    }
    
}

export default HomeLoggedIn