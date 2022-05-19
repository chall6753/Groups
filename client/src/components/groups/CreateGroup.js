import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {Container, Form, Button} from 'react-bootstrap'
import {createGroup} from '../../reducers/groupsReducer'
import CloudinaryUpload from "../Pictures/CloudinaryUpload";




function CreateGroup(){
    const [name,setName] = useState('')
    const [location, setLocation] = useState('')
    const [description, setDescription] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [groupPicUrl, setGroupPicUrl] = useState('')
    const [cloudinaryPublicId, setCloudinaryPublicId] = useState('')
    const navigate = useNavigate()
    const dispatch =  useDispatch()
    
    function handleCreateGroup(e){
        e.preventDefault();
        dispatch(createGroup(name, location, description, startDate, endDate, password, passwordConfirmation, groupPicUrl, cloudinaryPublicId, navigate))   
    }
    const handleUpload = (result) => {
        console.log(result)
          setGroupPicUrl(result.info.secure_url) 
          setCloudinaryPublicId(result.info.public_id) 
      }
    return (
        <Container style={{width: '500px'}}>
            <h1>Create Group!</h1>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label style={{fontWeight: 'bold', fontSize: 'large'}}>Group/Trip Name:</Form.Label>
                    <Form.Control type="text" placeholder="enter group name" onChange={(e) => setName(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label style={{fontWeight: 'bold', fontSize: 'large'}}>Location:</Form.Label>
                    <Form.Control type="text" placeholder="enter location" onChange={(e) => setLocation(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label style={{fontWeight: 'bold', fontSize: 'large'}}>Description:</Form.Label>
                    <Form.Control type="text" placeholder="enter description" onChange={(e) => setDescription(e.target.value)}/>
                </Form.Group>
                {/* add group photo */}
                <CloudinaryUpload
                 preset="j3rw41kn"
                 buttonText="Upload Group Profile Picture"
                 handleUpload={handleUpload}
                />
                <Form.Group className="mb-3">
                    <Form.Label style={{fontWeight: 'bold', fontSize: 'large'}}>Start Date:</Form.Label>
                    <Form.Control type="datetime-local" onChange={(e) => setStartDate(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label style={{fontWeight: 'bold', fontSize: 'large'}}>End Date:</Form.Label>
                    <Form.Control type="datetime-local" onChange={(e) => setEndDate(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label style={{fontWeight: 'bold', fontSize: 'large'}}>Password:</Form.Label>
                    <Form.Control type="password" placeholder="enter password" onChange={(e) => setPassword(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label style={{fontWeight: 'bold', fontSize: 'large'}}>Confirm Password:</Form.Label>
                    <Form.Control type="password" placeholder="confirm password" onChange={(e) => setPasswordConfirmation(e.target.value)}/>
                </Form.Group>
                <Button type='submit' onClick={handleCreateGroup}>Create Group</Button>
            </Form>
        </Container>
    )
}

export default CreateGroup