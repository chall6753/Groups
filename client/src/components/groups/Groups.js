import React from 'react'
import {useSelector} from 'react-redux'
import GroupCard from './GroupCard'
import {Container, Button, Card} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'

function Groups(){
    const navigate = useNavigate()
    const groups = useSelector(state => state.groups)


    return (
        
        <Container id='groupContainer'>
            <Card className='groupCard'>
                <Card.Body>
                    <Button variant="primary" onClick={()=>navigate('/create_group')}>create new group</Button>
                </Card.Body>
            </Card>
                {groups.map((group)=> {
                    return <GroupCard key={group.id} group={group}/>
                    })
                }   
            
        </Container>
        
    )
}

export default Groups