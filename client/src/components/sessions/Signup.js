import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {Container, Form, Button} from 'react-bootstrap'




function Signup(){
    const [firstName,setFirstName] = useState('')
    const [lastName,setLastName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [email, setEmail] = useState('')

    const navigate = useNavigate()

    const dispatch =  useDispatch()
    const currentUser = useSelector(state => state.currentUser)
    console.log(currentUser)
    function handleLogin(e){
        e.preventDefault();
        fetch('/api/signup',{
            method: 'POST',
            headers: {"Content-Type": 'application/json'},
            body: JSON.stringify({
                first_name: firstName,
                last_name: lastName,
                username: username,
                email: email,
                password: password,
                password_confirmation: passwordConfirmation
            })
        })
        .then(res => {
            if (res.ok){
                console.log('success')
                res.json().then(user => dispatch({type: "login", payload: user}))
                navigate('/')
            }
            else {
                res.json().then(res=> window.alert(res))
            }
        })
    }

    return (
        <Container id='login-signup-container'>
            <Form>
                <Form.Group className="mb-3" controlId="firstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)}/>
                    <Form.Text  className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="lastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}/>
                    <Form.Text  className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="userName">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="username" onChange={(e) => setUsername(e.target.value)}/>
                    <Form.Text  className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="passwordConfirmation">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={(e) => setPasswordConfirmation(e.target.value)}/>
                </Form.Group>
                <Button variant="primary" type="submit" onClick={handleLogin}>
                    Submit
                </Button>
            </Form>
            {/* <form>
                <title>Signup</title>
                <label>First name:</label>
                <input type='text' onChange={(e) => setFirstName(e.target.value)}></input>
                <label>Last name:</label>
                <input type='text' onChange={(e) => setLastName(e.target.value)}></input>
                <label>email:</label>
                <input type='email' onChange={(e) => setEmail(e.target.value)}></input>
                <label>username:</label>
                <input type='text' onChange={(e) => setUsername(e.target.value)}></input>
                <label>password:</label>
                <input type='password' onChange={(e) => setPassword(e.target.value)}></input>
                <label>Confirm password:</label>
                <input type='password' onChange={(e) => setPasswordConfirmation(e.target.value)}></input>
                <button type='submit' onClick={handleLogin}>signup</button>
            </form> */}
        </Container>
    )
}

export default Signup