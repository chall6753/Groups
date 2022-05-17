import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {Container} from 'react-bootstrap'
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
                <h1>Login</h1>
            <form>
                <label>username:</label>
                <input type='text' onChange={(e) => setUsername(e.target.value)}></input>
                <label>password:</label>
                <input type='password' onChange={(e) => setPassword(e.target.value)}></input>
                <button type='submit' onClick={handleLogin}>login</button>
            </form>
            </div>
            
        </Container>
    )
}

export default Signup