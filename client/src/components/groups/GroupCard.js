import React,{useState, useEffect} from "react";
import {Card, Button} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'



function GroupCard({group}){
    const navigate = useNavigate();
    const [isMember, setIsMember] = useState(group.is_member)
    const [password, setPassword] = useState('')
    const [showJoinForm, setShowJoinForm] = useState(false)
    console.log(group)

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
                setIsMember(true)
                setShowJoinForm(false)
            }
            else{window.alert('wrong password')}
        })
    }

    return (
        <Card className='groupCard'style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://www.libertytravel.com/sites/default/files/styles/full_size/public/all%20inclusive-hero%20%281%29.jpg?itok=JjwsPBPZ" />
            <Card.Body>
                <Card.Title>{group.name}</Card.Title>
                <Card.Subtitle>Location: {group.location}</Card.Subtitle>
                <Card.Text>
                {group.description}
                </Card.Text>
                {isMember?<Button variant="primary" onClick={()=> navigate(`/groups/${group.id}`)}>Go to group</Button>:<Button onClick={()=> setShowJoinForm(!showJoinForm) }>Join Group</Button>}
                {showJoinForm?joinGroupForm():null}
            </Card.Body>
        </Card>
    )
}

export default GroupCard