//action creators
import { useSelector } from "react-redux"
import {showChats} from './chatsReducer'
import {showGroups} from './groupsReducer'



export const login = (username, password, navigate) => {
    return async (dispatch) => {
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
            })
            
    }    
}
export const logout = () => {
    return async (dispatch) => {
        fetch('/api/logout').then(() => dispatch({type: 'logout'})).then(() => dispatch(showGroups()))
        
    }
}

export const setCurrentUser = () => {
    return async (dispatch) => {
        fetch('/api/currentUser')
            .then(res => {
                if (res.ok){
                    console.log('success')
                    res.json().then(user => dispatch({type: "login", payload: user}))
                    //navigate('/')
                }
                else{
                    console.log('error')
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
        console.log('logged out')
        return initialState
  
      default:
        return state;
    }
  }