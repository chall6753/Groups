
//action creators - where we fetch data or call action to change state

export const createGroup = (name, location, description, startDate, endDate) => {
  return  async (dispatch) => {
    fetch('/groups',{
      method: 'POST',
      headers: {"Content-Type": 'application/json'},
      body: JSON.stringify({
          name: name,
          location: location,
          description: description, 
          start_date: startDate,
          end_date: endDate
      })
    })
    .then(res => {
        if (res.ok){
            console.log('success')
            res.json().then(group => dispatch({type: 'createGroup', payload: group}))
            //navigate('/')
        }
        else {console.log('error')}
    })      
  }   
}

export const showYourGroups = ()=> {

  return async (dispatch) => {
      fetch('/groups')
      .then(res => {
        if(res.ok){
          res.json().then(groups => dispatch({type: 'showYourGroups', payload: groups}))
        }
        else{
          console.log("not logged in")
          res.json().then(groups => dispatch({type: 'showYourGroups', payload: initialState}))
        }
      })
    }
}
//reducers- where we change state

const initialState = []

export default function groupsReducer(state = initialState, action) {
    switch (action.type) {
      case "createGroup":
        console.log(action.payload)
        
        return [...state, action.payload]
      case "showYourGroups":
        console.log('showyourgroups')
        console.log(action.payload)
        return action.payload
      default:
        return state;
    }
  }