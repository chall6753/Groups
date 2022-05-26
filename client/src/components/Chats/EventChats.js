import React from "react";
import {Container} from "react-bootstrap"
import ChatCard from './ChatCard'

function EventChats({chats}){
    if (chats != undefined){
        return (
            <Container>
                <div>
                    {chats.map(chat=> {
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