import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {Container, Form, Button} from 'react-bootstrap'
import {login} from '../../reducers/sessionsReducer'



function Signup(){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()
    const dispatch =  useDispatch()
    
    function handleLogin(e){
        e.preventDefault();
        dispatch(login(username, password, navigate))
        
    }

    return (
        <Container id='login-signup-container'>
            <div>
                <h1 style={{fontWeight: 'bold'}}>Login</h1>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label style={{fontWeight: 'bold', fontSize: 'large'}}>username:</Form.Label>
                    <Form.Control type="username" placeholder="Enter username" onChange={(e) => setUsername(e.target.value)}/>
                </Form.Group>
                
                <Form.Group className="mb-3">
                    <Form.Label style={{fontWeight: 'bold', fontSize: 'large'}}>password:</Form.Label>
                    <Form.Control type="password" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)}/>
                </Form.Group>
                
                <Button type='submit' onClick={handleLogin}>login</Button>
                
            </Form>
            </div>
            
        </Container>
    )
}

export default Signup