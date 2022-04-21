
//action creators

export const setCurrentUser = (user) => {
    return {
      type: "login",
      payload: user,
    };
  };


//reducers

const initialState = {
 
    id: '',
    first_name: '', 
    last_name: '', 
    username: '', 
  
}

export default function currentUserReducer(state = initialState, action) {
    switch (action.type) {
      case "login":
        console.log(action.payload)
        
        return action.payload;

  
      default:
        return state;
    }
  }