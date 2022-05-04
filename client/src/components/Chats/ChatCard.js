import React from "react";
import {Card} from "react-bootstrap"


function ChatCard({chat}){

   

    return (
        <div className="container mt-5">
            <div className="row  d-flex justify-content-center">
                <div className="col-md-8">
                    <div className="card p-3">
                        <div className="d-flex justify-content-between align-items-center"/>
                      <div className="user d-flex flex-row align-items-center">
                      
                        <img src="https://i.imgur.com/hczKIze.jpg" width="30" className="user-img rounded-circle mr-2"/>
                        <span><small className="font-weight-bold text-primary">{chat.user.username}</small> <small className="font-weight-bold">{chat.comment}</small></span>                        
                      </div>
                      <small>{chat.updated_at}</small>

                      </div>
                      </div>
                      </div>
                      </div>
    )
}


export default ChatCard