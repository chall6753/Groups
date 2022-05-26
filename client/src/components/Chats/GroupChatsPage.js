import React from "react";
import {useSelector} from 'react-redux'
import {Container, Button} from "react-bootstrap"
import {useParams, useNavigate} from 'react-router-dom'
import CreateChat from "./CreateChat";
import ChatCard from './ChatCard'

function GroupChatsPage(){
    const chats = useSelector(state => state.chats)
    const group_id = useParams().id
    const groupChats = chats.filter((chat) => chat.group?.id == group_id && chat.event == null)
    const navigate = useNavigate()
    
    if (chats != ''){
        return (
        <Container>
            <h1>Group Chat Page</h1><Button onClick={()=>navigate(`/groups/${group_id}`)} style={{margin: '5px'}}>Back to Group</Button>
            <CreateChat group_id={group_id} />
            <div>
                {groupChats.map(chat=> {
                    return <ChatCard chat={chat} />
                })}
            </div>
        </Container>
        )
    }
    else{return <CreateChat group_id={group_id} />}   
}

export default GroupChatsPage