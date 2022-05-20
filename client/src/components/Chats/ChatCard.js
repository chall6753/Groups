import React, {useState, useEffect} from "react";
import {useNavigate} from 'react-router-dom';
import {Card, Button} from "react-bootstrap"
import {useSelector, useDispatch} from 'react-redux'
import {deleteChat, updateChat} from '../../reducers/chatsReducer'




function ChatCard({chat}){
    const [showEditForm, setShowEditForm] = useState(false)
    const [updatedComment, setUpdatedComment] = useState(chat.comment)//issue with chat.comment
    const currentUser = useSelector(state=> state.session)
    const dispatch = useDispatch()
    const updatedAt = new Date(chat.updated_at).toLocaleString()
    const navigate = useNavigate()
    useEffect(()=>{
      setUpdatedComment(chat.comment)
    },[chat])

  
    function toggleShowEditForm(){
        setShowEditForm(!showEditForm)
      }
    function handleUpdateChat(e,chat_id, updatedComment){
      e.preventDefault()
      dispatch(updateChat(chat_id, updatedComment))
    }
    function handleDelete(e){
      e.preventDefault()    
      dispatch(deleteChat(chat.id))
      toggleShowEditForm()
    }
    return (
        <div className="container mt-3" key={chat.id} onClick={()=>navigate(`/group_chats/${chat.group.id}`)} style={{cursor: 'pointer'}}>
            <div className="row  d-flex justify-content-center">
                <div className="col-lg-12">
                    <div className="card p-3">
                        <div className="d-flex justify-content-between align-items-center"/>
                      <div className="user d-flex flex-row align-items-center">
                        {currentUser.id == chat.user.id?<Button onClick={(e) => toggleShowEditForm(e)} variant='link' size='sm'>Edit</Button>:null}
                        

                        <div data-initials={chat.user.first_name[0] + chat.user.last_name[0]}></div>
                        <span><small className="font-weight-bold text-primary">{chat.user.username}</small> <small className="font-weight-bold">{updatedComment}</small></span>                        
                      </div>
                      <small>{updatedAt}</small>
                      {showEditForm?<div><input type="text" value={updatedComment} onChange={(e)=> setUpdatedComment(e.target.value)}></input>
                        <Button onClick={(e)=>{handleUpdateChat(e, chat.id, updatedComment) 
                          toggleShowEditForm()}}>Submit</Button>
                          <Button onClick={(e)=> handleDelete(e)}>Delete</Button>
                        </div>:null}
                      </div>
                      
                      </div>
                      
                      </div>
                      
    </div>

    )

    
}


export default ChatCard