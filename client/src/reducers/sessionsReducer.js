//action creators
import {showChats} from './chatsReducer'
import {showGroups} from './groupsReducer'

export const login = (username, password, navigate) => {
    return (dispatch) => {
        fetch('/api/login',{
                method: 'POST',
                headers: {"Content-Type": 'application/json'},
                body: JSON.stringify({
                    username: username,
                    password: password
                })
            })
            .then(res => {
                if (res.ok){
                    res.json().then(user => dispatch({type: "login", payload: user})).then(() => {
                        dispatch(showGroups())
                        dispatch(showChats())
                    })
                    navigate('/')
                }
                else{
                    res.json().then(res=> window.alert(res.errors))
                }
            })  
    }    
}
export const logout = () => {
    return (dispatch) => {
        fetch('/api/logout').then(() => dispatch({type: 'logout'})).then(() => dispatch(showGroups())) 
    }
}

export const setCurrentUser = () => {
    return (dispatch) => {
        fetch('/api/currentUser')
            .then(res => {
                if (res.ok){
                    console.log('success')
                    res.json().then(user => dispatch({type: "login", payload: user}))
                }     
            })
    }    
}           
//reducers

const initialState = {
    id: '',
    first_name: '', 
    last_name: '', 
    username: '', 
}

export default function sessionsReducer(state = initialState, action) {
    switch (action.type) {
        case "login":
        return action.payload;
        case 'logout':
        return initialState
      default:
        return state;
    }
  }