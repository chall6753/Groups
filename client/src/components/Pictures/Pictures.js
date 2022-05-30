import React, {useState,useEffect} from "react";
import {Container} from "react-bootstrap"
import {useParams} from 'react-router-dom'
import CloudinaryUpload from "./CloudinaryUpload";
import Thumbnail from "./Thumbnail"

function Pictures(){
   
    const group_id = useParams().id
    const [pics, setPics] = useState('')
   
    useEffect(()=>{
        fetch(`/api/pictures/${group_id}`)
        .then(res=>res.json())
        .then(res=> setPics(res))
    },[])
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

    const handleDelete = (pic_id)=>{
      fetch(`/api/pictures/${pic_id}`, {
        method: 'DELETE'
      })
      .then((res)=>{
        if (res.ok){
          setPics(pics.filter((pic)=> pic.id != pic_id))
        }
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
              {pics?pics.map((pic)=> <Thumbnail handleDelete={handleDelete}key={pic.id} pic={pic}/>):null}
          </Container>
        </div>
    )
}

export default Pictures