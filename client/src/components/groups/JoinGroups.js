import React from 'react'
import {useSelector} from 'react-redux'
import GroupCard from './GroupCard'
import {Container, Button, Card} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'

function JoinGroups(){
    const navigate = useNavigate()
    const groups = useSelector(state => state.groups)
    console.log(groups)

    

    return (
        <div>
            <h1>Join Groups</h1>
            <Container id='groupContainer'>
                
                <Card className='groupCard'style={{ width: '18rem' }}>
            
                <Card.Body>
                    <Button variant="primary" onClick={()=>navigate('/create_group')}>create new group</Button>
                </Card.Body>
                </Card>
                {groups.map((group)=> {
                    return <GroupCard key={group.id} group={group}/>
                    })
                }   
            </Container>
        </div>
        
        
    )
}

export default JoinGroups