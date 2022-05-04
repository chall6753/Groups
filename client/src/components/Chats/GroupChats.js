import React, {useEffect, useState} from "react";
import {useSelector} from 'react-redux'
import {Container} from "react-bootstrap"
import {useParams} from 'react-router-dom'
import CreateChat from "./CreateChat";
import ChatCard from './ChatCard'

function GroupChats(){
    const [chats,setChats] = useState('')
    const group_id = useParams().id
    const session = useSelector(state => state.session)
    console.log(chats)

    useEffect(()=>{
        fetch(`/chats/${group_id}`)
        .then(res=>res.json()).then(res=>setChats(res))
    },[])
    
    function handleSubmit(e, chat){
        e.preventDefault()
        fetch('/chats',{
            method: 'POST',
            headers: {"Content-Type": 'application/json'},
            body: JSON.stringify({
                comment: chat,
                group_id: group_id,
                user_id: session.id
                }
            )
        })
        .then(res=> res.json()).then(res=> setChats([res,...chats]))
        
    }

    console.log(chats)

    if (chats != ''){
        return (
        <Container>
            <CreateChat group_id={group_id} handleSubmit={handleSubmit}/>
            <div>
                {chats.map(chat=> {
                    console.log(chat)
                    return <ChatCard chat={chat}/>
                })}
            </div>
            
        </Container>
        )
    }
    else{
        return(
            <Container>
                <CreateChat group_id={group_id}/>            
            </Container>
        )
    }
    
}


export default GroupChats