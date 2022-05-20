
  
  export const showEvent = (id)=> {

    return async (dispatch) => {
        fetch(`/api/events/${id}`)
        .then(res => {
          if(res.ok){
            res.json().then(event => dispatch({type: 'showEvent', payload: event}))
          }
          else{
            console.log("error")
            
          }
        })
      }
  }
  
  export const updateEventChats = (chat) => {
    return async (dispatch) =>{
      
      dispatch({type: 'updateEventChats', payload: chat})
    }
  }

  
  //reducers- where we change state
  
  const initialState = []
  
  export default function eventReducer(state = initialState, action) {
      switch (action.type) {
        
        case "showEvent":
          
          return action.payload
        case 'updateEventChats':
          let newState = state
          newState.chats.push(action.payload)
          console.log(newState)
          return newState
        
        default:
          return state;
      }
    }