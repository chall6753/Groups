import React, {useState} from "react";
import {Form, Button} from "react-bootstrap"
import {useDispatch} from 'react-redux'
import {createChat} from '../../reducers/chatsReducer'

function CreateChat({group_id =null, event_id=null}){
    const dispatch = useDispatch()
    const [chat, setChat]= useState('')

    return (
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" placeholder="enter chat"rows={3} value={chat} onChange={(e)=> setChat(e.target.value)} />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={(e)=> {
                e.preventDefault()
                dispatch(createChat(chat, group_id, event_id))
                setChat('')
                }}>
                Submit
            </Button>
        </Form>
    )
}

export default CreateChat