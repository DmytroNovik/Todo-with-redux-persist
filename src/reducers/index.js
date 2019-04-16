import {combineReducers} from 'redux'
import {i18nState} from "redux-i18n"
import todos from './todos.js'
import comments from './comments.js'

export default combineReducers({
    i18nState,
    todos,
    comments
})