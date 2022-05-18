import React, {useState,useEffect} from "react";
import {Container, Button, Card} from "react-bootstrap"
import {useParams, useNavigate} from 'react-router-dom'
import {Image} from 'cloudinary-react'
import CloudinaryUpload from "../Pictures/CloudinaryUpload";
import Thumbnail from "./Thumbnail"


function Pictures(){
    const group_id = useParams().id
    const [pics, setPics] = useState('')
   
    useEffect(()=>{
        fetch(`/api/pictures/${group_id}`)
        .then(res=>res.json())
        .then(res=> setPics(res))
    },[])
    console.log(pics)
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
          .then(pic => {
            setPics([pic,...pics]);
          })
      }

    return(
        <div>
          
            <CloudinaryUpload
                 preset="r9y7oavj"
                 buttonText="Upload Picture"
                 handleUpload={handleUpload}
                />
          
          
          <Container id='groupContainer'>
            
              {pics?pics.map((pic)=> <Thumbnail pic={pic}/>):null}
            
          </Container>
        </div>
        
    )
}

export default Pictures