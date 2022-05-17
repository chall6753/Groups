export const createEvent = (name, location, description, startDate, endDate, group_id, navigate) => {
    return  async (dispatch) => {
      fetch('/api/events',{
        method: 'POST',
        headers: {"Content-Type": 'application/json'},
        body: JSON.stringify({
            name: name,
            location: location,
            description: description, 
            start_date: startDate,
            end_date: endDate,
            group_id: group_id
        })
      })
      .then(res => {
          if (res.ok){
              console.log('success')
              res.json().then(event => dispatch({type: 'createEvent', payload: event}))
              navigate('/group_list')
          }
          else {console.log('error')}
      })      
    }   
  }
  
  export const showEvents = ()=> {

    return async (dispatch) => {
        fetch('/api/events')
        .then(res => {
          if(res.ok){
            res.json().then(events => dispatch({type: 'showEvents', payload: events}))
          }
          else{
            console.log("error")
            
          }
        })
      }
  }
  
  //reducers- where we change state
  
  const initialState = []
  
  export default function eventsReducer(state = initialState, action) {
      switch (action.type) {
        case "createEvent":
          console.log(action.payload)
          
          return [...state, action.payload]
        case "showEvents":

          return action.payload
        
        default:
          return state;
      }
    }