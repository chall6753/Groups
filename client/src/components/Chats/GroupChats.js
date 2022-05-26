import React from "react";
import {Container} from "react-bootstrap"
import {useParams} from 'react-router-dom'
import CreateChat from "./CreateChat";
import ChatCard from './ChatCard'

function GroupChats({chats}){
    const group_id = useParams().id
    const groupChats = chats.filter((chat) => chat.group?.id == group_id).slice(0,5)
    
    if (chats != ''){
        return (
        <Container>
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

export default GroupChats