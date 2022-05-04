import React, {useEffect, useState} from "react";
import {Container, Form, Button} from "react-bootstrap"


function CreateChat({handleSubmit}){
    
    const [chat, setChat]= useState('')


    return (
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Enter chat</Form.Label>
                <Form.Control as="textarea" rows={3} value={chat} onChange={(e)=> setChat(e.target.value)} />
            </Form.Group>

            
            <Button variant="primary" type="submit" onClick={(e)=> {
                handleSubmit(e, chat)
                setChat('')
                }}>
                Submit
            </Button>
        </Form>
    )
}


export default CreateChat