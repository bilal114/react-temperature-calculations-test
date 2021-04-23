import { combineReducers } from 'redux'
import {
	weatherData
 } from './weatherReducer'


const rootReducer = combineReducers({
	weather : weatherData,
	
})

export default rootReducer
