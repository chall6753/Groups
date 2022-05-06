import React, {useState, useEffect} from "react";
import {useSelector, useDispatch} from 'react-redux'
import {Container} from "react-bootstrap"
import {useParams} from 'react-router-dom'
import CreateChat from "./CreateChat";
import ChatCard from './ChatCard'

function EventChats({event}){
    
    
    if (event != ''){
        return (
        <Container>
            <CreateChat group_id={event.group_id} event_id={event.id}/>
            <div>
                {event.chats.map(chat=> {
                    console.log(chat)
                    return <ChatCard chat={chat} />
                })}
            </div>
            
        </Container>
        )
    }
    else{return null}  
    
    
}


export default EventChats