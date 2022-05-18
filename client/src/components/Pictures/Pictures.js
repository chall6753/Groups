import React, {useState,useEffect} from "react";
import {Container, Button, Card} from "react-bootstrap"
import {useParams, useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import GroupChats from '../Chats/GroupChats'
import {deleteGroup} from '../../reducers/groupsReducer'
import CreateEvent from './../Events/CreateEvent'
import EventCard from './../Events/EventCard'
import CloudinaryUpload from "../Pictures/CloudinaryUpload";


function Pictures(){
    const group_id = useParams().id
   
    useEffect(()=>{
        fetch(`/api/pictures/${group_id}`)
        .then(res=>res.json())
        .then(res=> console.log(res))
    })

    const handleUpload = (result) => {
        const body = {
          thumbnail: result.info.secure_url,
          cloudinary_public_id: result.info.public_id,
          group_id: group_id
        }
        fetch('/api/pictures', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(body)
        })
          .then(res => res.json())
          .then(user => {
            console.log(user);
          })
      }

    return(
        <Container>
            <Card>
                <CloudinaryUpload
                 preset="r9y7oavj"
                 buttonText="Upload Picture"
                 handleUpload={handleUpload}
                />
            </Card>
        </Container>
    )
}

export default Pictures