import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {createGroup} from '../../reducers/groupsReducer'




function CreateGroup(){
    const [name,setName] = useState('')
    const [location, setLocation] = useState('')
    const [description, setDescritpion] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
   

    const navigate = useNavigate()

    const dispatch =  useDispatch()
    
    function handleCreateGroup(e){
        e.preventDefault();
        dispatch(createGroup(name, location, description, startDate, endDate))
        // fetch('/groups',{
        //     method: 'POST',
        //     headers: {"Content-Type": 'application/json'},
        //     body: JSON.stringify({
        //         name: name,
        //         location: location,
        //         description: description, 
        //         start_date: startDate,
        //         end_date: endDate
        //     })
        // })
        // .then(res => {
        //     if (res.ok){
        //         console.log('success')
        //         res.json().then(group => dispatch(createGroup(group)))
        //         navigate('/')
        //     }
        //     else {console.log('error')}
        // })
    }

    return (
        <div>
            <h1>Create Group!</h1>
            <form>
                <label>Group/trip name::</label>
                <input type='text' onChange={(e) => setName(e.target.value)}></input>
                <label>Location:</label>
                <input type='text' onChange={(e) => setLocation(e.target.value)}></input>
                <label>Description:</label>
                <input type='text' onChange={(e) => setDescritpion(e.target.value)}></input>
                <label>Start Date:</label>
                <input type='datetime-local' onChange={(e) => setStartDate(e.target.value)}></input>
                <label>End Date:</label>
                <input type='datetime-local' onChange={(e) => setEndDate(e.target.value)}></input>
                
                <button type='submit' onClick={handleCreateGroup}>Create Group</button>
            </form>
        </div>
    )
}

export default CreateGroup