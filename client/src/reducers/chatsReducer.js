export const createChat = (comment, group_id, event_id = null) => {
    return  async (dispatch) => {
      fetch('/api/chats',{
        method: 'POST',
        headers: {"Content-Type": 'application/json'},
        body: JSON.stringify({
            comment: comment,
            group_id: group_id, 
            event_id: event_id
           
        })
      })
      .then(res => {
          if (res.ok){
              console.log('success')
              res.json().then(chat => {
                dispatch({type: 'createChat', payload: chat})
                
              })
          }
          else {console.log('error')}
      })      
    }   
  }
  
  export const showChats = ()=> {

    return async (dispatch) => {
        fetch('/api/chats')
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
  
  export const deleteChat = (id)=>{
    return async (dispatch) => {
      fetch(`/api/chats/${id}`,{
        method: 'DELETE'
      })
      .then(res => {
        console.log(res)
        if(res.ok){
          dispatch({type: 'deleteChat', payload: id})
        }
        else{
          console.log("error")
        }
      }
      )}
  }
  
  export const updateChat = (id, comment) => {
    return async (dispatch) => {
      fetch(`/api/chats/${id}`,{
        method: 'PATCH', 
        headers: {"Content-Type": 'application/json'},
        body: JSON.stringify({
            comment: comment
        })
      })
      .then(res=> {
        if(res.ok){
          res.json().then(res=> dispatch({type: 'updateChat', payload: res}))
        }
        else{console.log('error')}
      })
    }
  }
  //reducers- where we change state
  
  const initialState = []
  
  export default function chatsReducer(state = initialState, action) {
      switch (action.type) {
        case "createChat":
          
          
          return [action.payload,...state]
        case "showChats":

          return action.payload
          case "deleteChat":
            
            return state.filter(chat=> chat.id != action.payload)

        case 'updateChat':
          
          return state
        default:
          return state;
      }
    }