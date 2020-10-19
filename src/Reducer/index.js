import {combineReducers} from "redux"
import locationData from "./setLocation"
import weatherData from "./weatherReducer"
import accident from "./insertAccidentReducer"
const reducers=combineReducers({
    locationData,
    weatherData,
    accident
 })
 export default reducers;