import {SET_LOCATION_DATA} from "../Action/type";

const intialState={
    latitude:null,
    longitude:null
   
}

const clickedLocation=(state=intialState,action)=>{
    switch (action.type){
        // get online user success
        case  SET_LOCATION_DATA  :
            console.log(action)
            return{
                latitude:action.latitude,
                longitude:action.longitude
            }
             
    default :return state;
}
}

export default clickedLocation;