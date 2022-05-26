import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {createEvent} from '../../reducers/eventsReducer'

function CreateEvent({group_id}){
    const [name,setName] = useState('')
    const [location, setLocation] = useState('')
    const [description, setDescritpion] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const navigate = useNavigate()
    const dispatch =  useDispatch()
    
    function handleCreateEvent(e){
        e.preventDefault();
        dispatch(createEvent(name, location, description, startDate, endDate, group_id, navigate)) 
    }
    return (
        <div>
            <h1>Create Event</h1>
            <form>
                <label>Event Name:</label>
                <input type='text' onChange={(e) => setName(e.target.value)}></input>
                <label>Location:</label>
                <input type='text' onChange={(e) => setLocation(e.target.value)}></input>
                <label>Description:</label>
                <input type='text' onChange={(e) => setDescritpion(e.target.value)}></input>
                <label>Start Date:</label>
                <input type='datetime-local' onChange={(e) => setStartDate(e.target.value)}></input>
                <label>End Date:</label>
                <input type='datetime-local' onChange={(e) => setEndDate(e.target.value)}></input>
                <button type='submit' onClick={handleCreateEvent}>Create Event</button>
            </form>
        </div>
    )
}

export default CreateEvent

