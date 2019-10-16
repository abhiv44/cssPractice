import { combineReducers } from 'redux'
import {loanReducer} from '../reducer/loan-reducer'
export default combineReducers({
    loanValue: loanReducer
})