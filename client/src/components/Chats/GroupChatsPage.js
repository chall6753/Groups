import React from "react";
import {useSelector} from 'react-redux'
import {Container} from "react-bootstrap"
import {useParams} from 'react-router-dom'
import CreateChat from "./CreateChat";
import ChatCard from './ChatCard'

function GroupChatsPage(){
    const chats = useSelector(state => state.chats)
    const group_id = useParams().id
    const groupChats = chats.filter((chat) => chat.group?.id == group_id && chat.event == null)
    
    if (chats != ''){
        return (
        <Container>
            <h1>Group Chat Page</h1>
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