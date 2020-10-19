import {GET_WEATHER,WEATHER_DATA_LOADING} from "../Action/type";

const intialState={
    weather:null,
    error:null,
    isLoading:false,
    success:null
   
}

const weatherReducer=(state=intialState,action)=>{
    switch (action.type){
        // get online user success
        case  GET_WEATHER  :
            console.log(action)
            return{
                weather:action.weather,
                error:action.error,
                isLoading:action.isLoading,
                success:action.success
            }
             case WEATHER_DATA_LOADING :
                 return{
                    isLoading:true
                 }
    default :return state;
}
}

export default weatherReducer;