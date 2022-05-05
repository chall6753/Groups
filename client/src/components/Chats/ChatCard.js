import React, {useState, useEffect} from "react";
import {Card, Button} from "react-bootstrap"
import {useSelector, useDispatch} from 'react-redux'



function ChatCard({chat}){
    const [showEditForm, setShowEditForm] = useState(false)
    const [updatedComment, setUpdatedComment] = useState(chat.comment)//issue with chat.comment
    const currentUser = useSelector(state=> state.session)
    const dispatch = useDispatch()
    
    console.log(chat)
    useEffect(()=>{
      setUpdatedComment(chat.comment)
    },[chat])


    function toggleShowEditForm(){
        setShowEditForm(!showEditForm)
      }
    function handleUpdateChat(){
      
    }
    return (
        <div className="container mt-5">
            <div className="row  d-flex justify-content-center">
                <div className="col-md-8">
                    <div className="card p-3">
                        <div className="d-flex justify-content-between align-items-center"/>
                      <div className="user d-flex flex-row align-items-center">
                        {currentUser.id == chat.user.id?<Button onClick={(e) => toggleShowEditForm(e)} variant='link' size='sm'>Edit</Button>:null}
                        

                        <img src="https://i.imgur.com/hczKIze.jpg" width="30" className="user-img rounded-circle mr-2"/>
                        <span><small className="font-weight-bold text-primary">{chat.user.username}</small> <small className="font-weight-bold">{updatedComment}</small></span>                        
                      </div>
                      <small>{chat.updated_at}</small>
                      {showEditForm?<div><input type="text" value={updatedComment} onChange={(e)=> setUpdatedComment(e.target.value)}></input>
                        <Button onClick={(e)=>{handleUpdateChat(e, chat.id, updatedComment) 
                        toggleShowEditForm()}}>Submit</Button></div>:null}
                      </div>
                      
                      </div>
                      
                      </div>
                      
    </div>

    )

    
}


export default ChatCard