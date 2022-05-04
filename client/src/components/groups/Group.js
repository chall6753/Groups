import React from "react";
import {Container, Button} from "react-bootstrap"
import {useParams, useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import GroupChats from '../Chats/GroupChats'
import {deleteGroup} from '../../reducers/groupsReducer'

function Group(){
    const dispatch = useDispatch()
    const group_id = useParams().id
    const navigate = useNavigate()
    
    return (
        <Container>
            <p>{group_id}</p>
            <Button onClick={()=> dispatch(deleteGroup(group_id, navigate))}>Delete</Button>
            <GroupChats/>
        </Container>
    )
}

export default Group