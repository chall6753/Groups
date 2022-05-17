
//action creators - where we fetch data or call action to change state

export const createGroup = (name, location, description, startDate, endDate, password, passwordConfirmation, navigate) => {
  return  async (dispatch) => {
    fetch('/groups',{
      method: 'POST',
      headers: {"Content-Type": 'application/json'},
      body: JSON.stringify({
          name: name,
          location: location,
          description: description, 
          start_date: startDate,
          end_date: endDate,
          password: password,
          password_confirmation: passwordConfirmation
      })
    })
    .then(res => {
        if (res.ok){
            console.log('success')
            res.json().then(group => dispatch({type: 'createGroup', payload: group}))
            navigate('/group_list')
        }
        else {console.log('error')}
    })      
   
    
  }   
}

export const showGroups = ()=> {

  return async (dispatch) => {
      fetch('/groups')
      .then(res => {
        if(res.ok){
          console.log(res)
          res.json().then(groups => dispatch({type: 'showGroups', payload: groups}))
        }
        else{
          console.log("yeet")
          
        }
      })
    }
}

export const deleteGroup = (group_id, navigate)=> {

  return async (dispatch) => {
      fetch(`/groups/${group_id}`,{
        method: 'DELETE'
      })
      .then(res => {
        if(res.ok){
          
          dispatch({type: 'deleteGroup', payload: group_id})
          navigate('/group_list')
        }
        else{
          console.log("no group found")
          
        }
      })
    }
}
// export const joinGroup = () => {

//   return async (dispatch) => {
//     fetch(`groups/join/${id}`, {
//       method: 'POST', 
//       headers: {"Content-Type": 'application/json'}
//     })
//     .then(res=>res.json()).then(groups)
//   }
// }
//reducers- where we change state

const initialState = []

export default function groupsReducer(state = initialState, action) {
    switch (action.type) {
      case "createGroup":
        console.log(action.payload)
        
        return [...state, action.payload]
      case "showGroups":
        
        return action.payload
      case "deleteGroup":
        let updatedState = state.filter(group=> group.id != action.payload)
        return updatedState
      default:
        return state;
    }
  }