import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'




function Signup(){
    const [firstName,setFirstName] = useState('')
    const [lastName,setLastName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [email, setEmail] = useState('')

    const dispatch =  useDispatch()
    const currentUser = useSelector(state => state.currentUser)
    console.log(currentUser)
    function handleLogin(e){
        e.preventDefault();
        fetch('/signup',{
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
            }
            else {console.log('error')}
        })
    }

    return (
        <div>
            <h1>Signup</h1>
            <form>
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
            </form>
        </div>
    )
}

export default Signup