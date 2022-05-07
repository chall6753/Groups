import {combineReducers} from 'redux'
import sessionsReducer from './sessionsReducer'
import groupsReducer from "./groupsReducer"
import eventsReducer from './eventsReducer'
import chatsReducer from './chatsReducer'
import eventReducer from './eventReducer'

export default combineReducers({
    session: sessionsReducer,
    groups: groupsReducer,
    events: eventsReducer,
    chats: chatsReducer,
    event: eventReducer
})