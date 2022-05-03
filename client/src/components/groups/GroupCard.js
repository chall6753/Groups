import React from "react";
import {Card} from 'react-bootstrap'
import {Button} from 'react-bootstrap'



function GroupCard({group}){

    return (
        <Card className='groupCard'style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://www.libertytravel.com/sites/default/files/styles/full_size/public/all%20inclusive-hero%20%281%29.jpg?itok=JjwsPBPZ" />
            <Card.Body>
                <Card.Title>{group.name}</Card.Title>
                <Card.Subtitle>Location: {group.location}</Card.Subtitle>
                <Card.Text>
                {group.description}
                </Card.Text>
                <Button variant="primary">Go to group</Button>
            </Card.Body>
        </Card>
    )
}

export default GroupCard