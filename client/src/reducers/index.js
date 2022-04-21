import {combineReducers} from 'redux'
import currentUserReducer from './currentUserSlice'

export default combineReducers({
    currentUser: currentUserReducer
})