import React, {useState,useEffect} from "react";
import {Container, Button} from "react-bootstrap"
import {useParams, useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import GroupChats from '../Chats/GroupChats'
import {deleteGroup} from '../../reducers/groupsReducer'
import CreateEvent from './../Events/CreateEvent'
import EventCard from './../Events/EventCard'


function Group(){
    const [canModifyGroup, setCanModifyGroup] = useState(false)
   
    
    const dispatch = useDispatch()
    const group_id = useParams().id
    const navigate = useNavigate()
    const groups = useSelector(state => state.groups)
    const chats = useSelector(state => state.chats)

    console.log(groups)
    
    useEffect(()=>setCanModifyGroup(groups.find((group)=> group.id == group_id )?.can_modify_group),[])

    
    
    console.log(chats)
    return (
        <Container>
            <CreateEvent group_id={group_id}/>
            
            {canModifyGroup?<Button onClick={()=> dispatch(deleteGroup(group_id, navigate))}>Delete</Button>:null}
            <GroupChats chats={chats}/>
        </Container>
    )
}

export default Group