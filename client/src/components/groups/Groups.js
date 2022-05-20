import React from 'react'
import {useSelector} from 'react-redux'
import GroupCard from './GroupCard'
import {Container, Button, Card} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'

function Groups(){
    const navigate = useNavigate()
    const groups = useSelector(state => state.groups)
    const yourGroups = groups.filter((group)=> group.is_member == true)
    const otherGroups = groups.filter((group)=> group.is_member == false)

    return (
        <Container>
            <h1>Your Groups</h1>
            <Container id='groupContainer'>
                <Card className='groupCard'>
                    <Card.Body>
                        <Button variant="primary" onClick={()=>navigate('/create_group')}>create new group</Button>
                    </Card.Body>
                </Card>
                    {yourGroups.map((group)=> {
                        return <GroupCard key={group.id} group={group}/>
                        })
                    }   
            </Container>
            <h1>Other Groups</h1>
            <Container id='groupContainer'>
                    {otherGroups.map((group)=> {
                        return <GroupCard key={group.id} group={group}/>
                        })
                    }   
            </Container>
        </Container>
        
        
    )
}

export default Groups