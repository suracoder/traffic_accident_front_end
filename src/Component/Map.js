import React, { useEffect, useState, useContext, Component } from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow, Polygon } from "react-google-maps"
// import axios from "axios"
// import { Subject } from 'rxjs';
import {setLocation} from "../Action/index"
// import { useSnackbar } from 'notistack';
// import { getZoneData } from "../Action"
// import MarkerDetail from "./markerDetail"

import { useSelector, useDispatch, connect } from 'react-redux';

class Map extends Component {

    constructor() {
        super();

        this.state = {

        }
    }
    // for socket context










    render() {


        
       

        // this.props.onlineTraffic.map(i=>console.log("sura",i))
        return (

            <GoogleMap
            onClick={
                (e) =>{this.props.onMapClick(e.latLng.lat(),e.latLng.lng())
                    // this.props.onMapClick(e.latLng.lat(),e.latLng.lng())
                }
            }
                defaultCenter={{ lat: 7.013191, lng: 39.9746573 }}
                defaultZoom={10}>



            </GoogleMap>
        )

    }
}
const WrappedMap = withScriptjs(withGoogleMap(Map));

function MyMapComponent(props) {
    return (
        <div  style={{ width: '100%', height: '100%' }}>
            <WrappedMap
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCGg3Vu4KpU7566Ghc-CqJy0pYR4Fhfa-A&v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} >loading</div>}
                containerElement={<div style={{ height: `100%` }} />}
                mapElement={<div style={{ height: `100%` }} />}
                onMapClick={props.clickedLocation}

            />
        </div>
    )
}

 
const mapDispatchToProps = dispatch => ({
    clickedLocation: (latitude,longitude) => dispatch(setLocation(latitude,longitude))
})
export default connect(null,mapDispatchToProps)(MyMapComponent);
 