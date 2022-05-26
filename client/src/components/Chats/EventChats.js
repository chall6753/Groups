import React from "react";
import {Container} from "react-bootstrap"
import ChatCard from './ChatCard'

function EventChats({chats}){
    if (chats != undefined){
        return (
            <Container>
                <div>
                    {chats.map(chat=> {
                        
                        return <ChatCard key={chat.id} chat={chat} />
                    })}
                </div>
            </Container>
        )
    }
    else{return null}  
}

export default EventChats