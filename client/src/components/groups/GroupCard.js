import React from "react";
import {Card, Button} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'



function GroupCard({group}){
    const navigate = useNavigate();

    return (
        <Card className='groupCard'style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://www.libertytravel.com/sites/default/files/styles/full_size/public/all%20inclusive-hero%20%281%29.jpg?itok=JjwsPBPZ" />
            <Card.Body>
                <Card.Title>{group.name}</Card.Title>
                <Card.Subtitle>Location: {group.location}</Card.Subtitle>
                <Card.Text>
                {group.description}
                </Card.Text>
                <Button variant="primary" onClick={()=> navigate(`/group/${group.id}`)}>Go to group</Button>
            </Card.Body>
        </Card>
    )
}

export default GroupCard