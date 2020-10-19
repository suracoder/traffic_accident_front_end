import {SEND_ACCIDENT} from "../Action/type";

const intialState={
       error:null,
        isSend:false,
        isLoading:false,
        success:null
}

const insertAccident=(state=intialState,action)=>{
    switch (action.type){
        // get online user success
        case  SEND_ACCIDENT  :
            console.log(action)
            return{
                isSend:action.weather,
                error:action.error,
                isLoading:action.isLoading,
                success:action.success
            }
            
    default :return state;
}
}

export default insertAccident;