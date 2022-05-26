
//action creators - where we fetch data or call action to change state

export const createGroup = (name, location, description, startDate, endDate, password, passwordConfirmation, groupPicUrl, cloudinaryPublicId, navigate) => {
  return  async (dispatch) => {
    fetch('/api/groups',{
      method: 'POST',
      headers: {"Content-Type": 'application/json'},
      body: JSON.stringify({
          name: name,
          location: location,
          description: description, 
          start_date: startDate,
          end_date: endDate,
          password: password,
          password_confirmation: passwordConfirmation,
          group_pic_url: groupPicUrl,
          cloudinaryPublicId: cloudinaryPublicId
      })
    })
    .then(res => {
        if (res.ok){
            console.log('success')
            res.json().then(group => dispatch({type: 'createGroup', payload: group}))
            navigate('/group_list')
        }
        else res.json().then(res=> window.alert(res))
    })      
   
    
  }   
}

export const showGroups = ()=> {

  return async (dispatch) => {
      fetch('/api/groups')
      .then(res => {
        if(res.ok){
          
          res.json().then(groups => dispatch({type: 'showGroups', payload: groups}))
        }
        
      })
    }
}

export const deleteGroup = (group_id, navigate)=> {

  return async (dispatch) => {
      fetch(`/api/groups/${group_id}`,{
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

//reducers- where we change state

const initialState = []

export default function groupsReducer(state = initialState, action) {
    switch (action.type) {
      case "createGroup":

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