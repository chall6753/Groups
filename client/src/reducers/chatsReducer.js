export const createChat = (comment, group_id) => {
    return  async (dispatch) => {
      fetch('/chats',{
        method: 'POST',
        headers: {"Content-Type": 'application/json'},
        body: JSON.stringify({
            comment: comment,
            group_id: group_id
        })
      })
      .then(res => {
          if (res.ok){
              console.log('success')
              res.json().then(chat => dispatch({type: 'createChat', payload: chat}))
             
          }
          else {console.log('error')}
      })      
    }   
  }
  
  export const showChats = ()=> {

    return async (dispatch) => {
        fetch('/chats')
        .then(res => {
          if(res.ok){
            res.json().then(chats => dispatch({type: 'showChats', payload: chats}))
          }
          else{
            console.log("error")
            
          }
        })
      }
  }
  
  //reducers- where we change state
  
  const initialState = []
  
  export default function chatsReducer(state = initialState, action) {
      switch (action.type) {
        case "createChat":
          console.log(action.payload)
          
          return [action.payload,...state]
        case "showChats":

          return action.payload
        
        default:
          return state;
      }
    }