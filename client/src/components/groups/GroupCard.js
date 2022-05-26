import React,{useState, useEffect} from "react";
import {Card, Button} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {showGroups} from '../../reducers/groupsReducer'

function GroupCard({group}){
    const navigate = useNavigate();
    const [isMember, setIsMember] = useState(group.is_member)
    const [password, setPassword] = useState('')
    const [showJoinForm, setShowJoinForm] = useState(false)
    const dispatch= useDispatch()

    const joinGroupForm = ()=>{
        return (
            <form>
                <label>password:</label>
                <input type='password' onChange={(e) => setPassword(e.target.value)}></input>
                <Button onClick={()=>handleJoinGroup()}>join</Button>
            </form>
        )
    }
    const handleJoinGroup = ()=>{
        fetch(`/api/users/join_group`, {
            method: 'POST',
            headers: {"Content-Type": 'application/json'},
            body: JSON.stringify({
                group_id: group.id, 
                password: password
            })
        })
        .then(res=>{
            if (res.ok){
                dispatch(showGroups())
                setIsMember(true)
                setShowJoinForm(false)
                // group.is_member = true
            }
            else{window.alert('wrong password')}
        })
    }

    return (
        <Card className='groupCard'>
            <Card.Img variant='top' src={group.group_pic_url} style={{width: '75%', height: 'auto', margin: '10px'}}/>
            <Card.Body style={{padding: '0px'}}>
                <Card.Title>{group.name}</Card.Title>
                <Card.Subtitle>Location: {group.location}</Card.Subtitle>
                <Card.Text>
                {group.description}
                </Card.Text>
                {isMember?<Button variant="primary" onClick={()=> navigate(`/groups/${group.id}`)}>Go to group</Button>:showJoinForm?null:<Button onClick={()=> setShowJoinForm(!showJoinForm) }>Join Group</Button>}
                {showJoinForm?joinGroupForm():null}
            </Card.Body>
        </Card>
    )
}

export default GroupCard