import {SET_LOCATION_DATA,GET_WEATHER,WEATHER_DATA_LOADING,SEND_ACCIDENT} from "./type"
import axios from 'axios'


export const setLocation=(latitude,longitude)=>{
    return{
        type:SET_LOCATION_DATA,
        latitude,
        longitude
          
    }
}

export const setWeather=(weather,error,isLoading,success)=>{
    return{
        type:GET_WEATHER,
          weather,
          error,
          isLoading,
          success
          
    }
}
export const setLoading=(isLoading)=>{
    return{
type:WEATHER_DATA_LOADING,
isLoading
    }
}
export const fetchWeather=(lat,long)=>{
    return (dispatch) => {
      

        dispatch(setWeather(null,null,true,null))
        return axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=60f549763cd391d53f670c26a178340c`).
            then(response => {
console.log("responed data ",response.data)
 
    dispatch(setWeather(response.data,null,false,true))
         

                // setLoading(false)

            }
            ).
            catch(error => {
                console.dir(error.message);
                dispatch(setWeather(null,error.message,false,false))
                // setLoading(false)
               


            });
    }    
}

// https//:api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=60f549763cd391d53f670c26a178340c`

export const accidentSend = (isSend,error,isLoading,success) => {
    return {
        type: SEND_ACCIDENT,
        error,
        isSend,
        isLoading,
        success
    }
}
export const sendAccidentToApi = (data) => {

    return (dispatch) => {
         
        dispatch(accidentSend(false,null,true,null))

        return axios.post(`http://localhost:4000/api/insertAccident`, data).
            then(response => {

                dispatch(accidentSend(true,null,false,true))

            }
            ).
            catch(error => {

                dispatch(accidentSend(false,error.message,false,false))            });
    }    
}
