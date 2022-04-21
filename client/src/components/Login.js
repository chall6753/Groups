import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'




function Signup(){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const dispatch =  useDispatch()
    const currentUser = useSelector(state => state.currentUser)
    console.log(currentUser)
    function handleLogin(e){
        e.preventDefault();
        fetch('/login',{
            method: 'POST',
            headers: {"Content-Type": 'application/json'},
            body: JSON.stringify({
                username: username,
                password: password
            })
        })
        .then(res => {
            if (res.ok){
                console.log('success')
                res.json().then(user => dispatch({type: "login", payload: user}))
                
            }
        })
    }

    return (
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
    )
}

export default Signup