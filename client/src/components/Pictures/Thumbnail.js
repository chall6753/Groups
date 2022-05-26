import React from "react";
import {Button, Card} from "react-bootstrap"
import {useSelector} from 'react-redux'

function Thumbnail({pic}){
    const currentUser = useSelector(state=> state.session)

    return (
        <Card className="thumbnailCard">
            <img style={{width:'250px'}}src={pic.thumbnail}/>
            {pic.user_id == currentUser.id? <Button style={{width:'100px'}}>Delete</Button>:null}
        </Card>    
    )
}

export default Thumbnail