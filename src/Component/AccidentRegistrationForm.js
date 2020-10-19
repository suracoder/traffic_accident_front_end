import React, { useContext } from 'react';
import 'date-fns';
import { useSelector, useDispatch, connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import ProgressButton from "./CircleButton"
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import Tooltip from '@material-ui/core/Tooltip';
import {sendAccidentToApi} from "../Action/index"
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

import {
    police_force_data, sex_of_driver_data, casualty_class_data,
    vehicle_manoeuvre_data, road_type_data, light_condition_data,
    junction_control_data, junction_detail_data, special_condition_on_site_data
    , vehicle_propelsion_code_data, casualty_type_data, vehicle_type_data
    , region_data, zone_data, wereda_data, action_taked_data, cause_of_accident_data, speed_limt_data, property_injury_data
} from "./data"
const useStyles = makeStyles((theme) => ({
    root: {

        height: 50,
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

function AccidentField(props) {
    const classes = useStyles();
    const dispatch=useDispatch()
    const [selectedDate, setSelectedDate] = React.useState(0);
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
      setOpen(false);
    };
    const handleToggle = () => {
      setOpen(!open);
    };
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    const [date, setDate] = React.useState(null);

    const [police_force, setPoliceforce] = React.useState(null)
    const [age_of_driver, setAgeofdriver] = React.useState(null)
    const [sex_of_driver, setSexofdriver] = React.useState(null);
    const [vehicle_manoeuvre, setVehicleManoeuvre] = React.useState(null);
    const [engine_capacity, setEnginecapacity] = React.useState(null)

    const [road_type, setRoadtype] = React.useState(null)
    const [light_condition, setLightcondition] = React.useState(null);
    const [weather_main, setWeather_main] = React.useState(null);
    const [temp, setTemp] = React.useState(null)
    const [pressure, setPressure] = React.useState(null)
    const [humidity, setHumidity] = React.useState(null)

    const [visibility, setVisibility] = React.useState(null)
    const [wind_speed, setWindSpeed] = React.useState(null);
    const [rain, setRain] = React.useState(null);
    const [clouds, setClouds] = React.useState(null)
    const [speed_limt, setSpeedlimt] = React.useState(null)
    const [casualty_class, setCasualty_class] = React.useState(null)

    const [latitude, setLatitude] = React.useState(null)
    const [longitude, setLongitude] = React.useState(null);
    const [number_of_vehicle, setNumberofvehicle] = React.useState(null);
    const [junction_detail, setJunctiondetail] = React.useState(null)
    const [junction_control, setJunctioncontrol] = React.useState(null)
    const [special_condition_on_site, setSpecialconditiononsite] = React.useState(null)

    const [vehicle_propelsion_code, setVehiclepropelsioncode] = React.useState(null)
    const [casualty_type, setCasualtytype] = React.useState(null);
    const [vehicle_type, setVehicletype] = React.useState(null);
    const [region, setRegion] = React.useState(null)
    const [zone, setZone] = React.useState(null)
    const [wereda, setWereda] = React.useState(null)
    const [death, setDeath] = React.useState(null)
    const [slight__injury, setSlight__injury] = React.useState(null);
    const [medium_injury, setMediuminjury] = React.useState(null)
    const [action_taked, setActiontaked] = React.useState(null)
    const [cause_of_accident, setCauseofaccident] = React.useState(null)
    const [fatal_injury, setFatalinjury] = React.useState(null)
    const [property_injury, setPropertyinjury] = React.useState(null)
    const [age_of_vehicle, setAgeofvehicle] = React.useState(null)
    const cData = (event) => {

        setDate(event.target.value);
    };
  const cFatal_injury=(event)=>{
    setFatalinjury(event.target.value)
  }
    const cPolice_force = (event) => {
        setPoliceforce(event.target.value)
    }
    const cAgeofdriver = (event) => {
        setAgeofdriver(event.target.value)
    }
    const cSex_of_driver = (event) => {
        setSexofdriver(event.target.value)
    }
    const cVehicle_manoeuvre = (event) => {
        setVehicleManoeuvre(event.target.value)
    }
    const cEngine_capacity = (event) => {
        setEnginecapacity(event.target.value)
    }


    const cRoad_type = (event) => {
        setRoadtype(event.target.value)
    }
    const clight_condition = (event) => {
        setLightcondition(event.target.value)
    }
    const cWeather_main = (event) => {
        setWeather_main(event.target.value)
    }

    const cTemp = (event) => {
        setTemp(event.target.value)
    }
    const cPressure = (event) => {
        setPressure(event.target.value)
    }
    const cHumidity = (event) => {
        setHumidity(event.target.value)
    }


    const cVisibility = (event) => {
        setVisibility(event.target.value)
    }
    const cWind_speed = (event) => {
        setWindSpeed(event.target.value)
    }
    const cRain = (event) => {
        setRain(event.target.value)
    }

    const cClouds = (event) => {
        setClouds(event.target.value)
    }

    const cSpeed_limt = (event) => {
        setSpeedlimt(event.target.value)
    }
    const cCasualty_class = (event) => {
        setCasualty_class(event.target.value)
    }

    const clatitude = (event) => {
        setLatitude(event.target.value)
    }

    const cLongitude = (event) => {
        setLongitude(event.target.value)
    }
    const cNumber_of_vehicle = (event) => {
        setNumberofvehicle(event.target.value)
    }


    const cJunction_detail = (event) => {
        setJunctiondetail(event.target.value)
    }
    const cJunction_control = (event) => {
        setJunctioncontrol(event.target.value)
    }

    const cSpecial_condition_on_site = (event) => {
        setSpecialconditiononsite(event.target.value)
    }

    const cVehicle_propelsion_code = (event) => {
        setVehiclepropelsioncode(event.target.value)
    }
    const cCasualty_type = (event) => {
        setCasualtytype(event.target.value)
    }




    const cVehicle_type = (event) => {
        setVehicletype(event.target.value)
    }
    const cRegion = (event) => {
        setRegion(event.target.value)
    }

    const cZone = (event) => {
        setZone(event.target.value)
    }

    const cWereda = (event) => {
        setWereda(event.target.value)
    }
    const cDeath = (event) => {
        setDeath(event.target.value)
    }





    const cSlight__injury = (event) => {
        setSlight__injury(event.target.value)
    }
    const cMedium_injury = (event) => {
        setMediuminjury(event.target.value)
    }

    const cAction_taked = (event) => {
        setActiontaked(event.target.value)
    }

    const cCause_of_accident = (event) => {
        setCauseofaccident(event.target.value)
    }
    const cProperty_injury = (event) => {
        setPropertyinjury(event.target.value)
    }
    const cAge_of_vehicle = (event) => {
        setAgeofvehicle(event.target.value)
    }

    let distance = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 200, 300, 400, 500]
    let interval = [50, 60, 70, 80, 90, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000]
    let distanceInfo = `The minimum distance in meters that
   the device location needs to change before the location update callback in your app is called.
    Defaults to 0 for no filtering.`
    console.log("pops on selecter ", props)
    return (
                 
       
        <div>
    {props.accident.isLoading===true?<Backdrop>
        <CircularProgress color="primary" />
      </Backdrop>:
            <Grid container spacing={1}>

                <Grid item xs={3} >
                    {/* <TextField id="standard-basic"   label="latitude" /> */}

                    <TextField
                        disabled
                        id="outlined-number"
                        label="latitude"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        value={props.locationData.latitude}
                        variant="outlined"
                    />

                </Grid>
                <Grid item xs={3} >
                    <TextField
                        disabled
                        id="outlined-number"
                        label="longitude"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        value={props.locationData.longitude}
                        variant="outlined"
                    />
                    {/* <Grid item xs={2} > */}
                    <ProgressButton />

                    {/* </Grid> */}
                </Grid>
                <Grid item xs={6} >
                    <TextField
                        id="datetime-local"
                        label="Date and time"
                        type="datetime-local"
                        defaultValue="2017-05-24T10:30"
                        onChange={cData}

                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Grid>

                <Grid item xs={3} >
                    <FormControl className={classes.formControl}>
                        <Tooltip title={distanceInfo}>
                            <InputLabel htmlFor="uncontrolled-native">police force</InputLabel>
                        </Tooltip>
                        <NativeSelect
                            onChange={cPolice_force}

                            // defaultValue={props.data.distanceFilter}
                            inputProps={{
                                name: "name",
                                id: 'uncontrolled-native',
                            }}
                        >
                            <option aria-label="None" value="" />

                            {/* <option value={props.data.distanceFilter}>{props.data.distanceFilter}</option> */}
                            {police_force_data.map(i => <option value={i}>{i}</option>)

                            }

                        </NativeSelect>
                        <FormHelperText>Uncontrolled</FormHelperText>
                    </FormControl>
                </Grid>


                <Grid item xs={3}>
                    <TextField id="standard-basic" onChange={cAgeofdriver} label="age of driver" />

                </Grid>
                <Grid item xs={3} >

                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="uncontrolled-native">sex of driver</InputLabel>
                        <NativeSelect
                            onChange={cSex_of_driver}
                            // defaultValue={props.data.interval}
                            inputProps={{
                                name: 'name',
                                id: 'uncontrolled-native',
                            }}
                        >
                            <option aria-label="None" value="" />

                            {/* <option value={props.data.interval}>{props.data.interval}</option> */}
                            {
                                sex_of_driver_data.map(i => <option value={i} >{i}</option>)}

                        </NativeSelect>
                        <FormHelperText>Uncontrolled</FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item xs={4} >

                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="uncontrolled-native">vehicle manoeuvre</InputLabel>
                        <NativeSelect
                            onChange={cVehicle_manoeuvre}
                            // defaultValue={props.data.fastestInterval}
                            inputProps={{
                                name: 'name',
                                id: 'uncontrolled-native',
                            }}
                        >
                            <option aria-label="None" value="" />

                            {/* <option value={props.data.fastestInterval}>{props.data.fastestInterval}</option> */}
                            {
                                vehicle_manoeuvre_data.map(i => <option value={i} >{i}</option>)}

                        </NativeSelect>
                        <FormHelperText>Uncontrolled</FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item xs={3}>
                    <TextField id="standard-basic" onChange={cEngine_capacity} label="engine capacity" />

                </Grid>
                <Grid item xs={3} >


                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="uncontrolled-native">road type </InputLabel>
                        <NativeSelect
                            onChange={cRoad_type}
                            // defaultValue={props.data.androidProvider}
                            inputProps={{
                                name: 'name',
                                id: 'uncontrolled-native',
                            }}
                        >
                            <option aria-label="None" value="" />

                            {/* <option value={props.data.androidProvider}>{props.data.androidProvider}</option> */}

                            {road_type_data.map(i => <option value={i} >{i}</option>)}


                        </NativeSelect>
                        <FormHelperText>Uncontrolled</FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item xs={3} >

                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="uncontrolled-native">light condition</InputLabel>
                        <NativeSelect
                            onChange={clight_condition}
                            // defaultValue={props.data.androidProvider}
                            inputProps={{
                                name: 'name',
                                id: 'uncontrolled-native',
                            }}
                        >
                            <option aria-label="None" value="" />

                            {/* <option value={props.data.androidProvider}>{props.data.androidProvider}</option> */}
                            {
                                light_condition_data.map(i => <option value={i} >{i}</option>)}



                        </NativeSelect>
                        <FormHelperText>Uncontrolled</FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item xs={3} >

                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="uncontrolled-native">casualty class</InputLabel>
                        <NativeSelect
                            onChange={cCasualty_class}
                            // defaultValue={props.data.androidProvider}
                            inputProps={{
                                name: 'name',
                                id: 'uncontrolled-native',
                            }}
                        >
                            <option aria-label="None" value="" />

                            {/* <option value={props.data.androidProvider}>{props.data.androidProvider}</option> */}

                            {
                                casualty_class_data.map(i => <option value={i} >{i}</option>)}



                        </NativeSelect>
                        <FormHelperText>Uncontrolled</FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item xs={3} >
                    <TextField id="standard-basic" onChange={cNumber_of_vehicle} label="number of vehicle" />


                </Grid>
                <Grid item xs={3} >
                    <TextField id="standard-basic" onChange={cAge_of_vehicle} label="age of vehicle" />


                </Grid>
                <Grid item xs={3} >

                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="uncontrolled-native">junction detail</InputLabel>
                        <NativeSelect
                            onChange={cJunction_detail}
                            // defaultValue={props.data.androidProvider}
                            inputProps={{
                                name: 'name',
                                id: 'uncontrolled-native',
                            }}
                        >
                            <option aria-label="None" value="" />

                            {/* <option value={props.data.androidProvider}>{props.data.androidProvider}</option> */}
                            {
                                junction_detail_data.map(i => <option value={i} >{i}</option>)}




                        </NativeSelect>
                        <FormHelperText>Uncontrolled</FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item xs={3} >

                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="uncontrolled-native">junction control</InputLabel>
                        <NativeSelect
                            onChange={cJunction_control}
                            // defaultValue={props.data.androidProvider}
                            inputProps={{
                                name: 'name',
                                id: 'uncontrolled-native',
                            }}
                        >
                            <option aria-label="None" value="" />

                            {/* <option value={props.data.androidProvider}>{props.data.androidProvider}</option> */}
                            {
                                junction_control_data.map(i => <option value={i} >{i}</option>)}




                        </NativeSelect>
                        <FormHelperText>Uncontrolled</FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item xs={4} >

                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="uncontrolled-native">special condition on site</InputLabel>
                        <NativeSelect
                            onChange={cSpecial_condition_on_site}
                            // defaultValue={props.data.androidProvider}
                            inputProps={{
                                name: 'name',
                                id: 'uncontrolled-native',
                            }}
                        >
                            <option aria-label="None" value="" />

                            {/* <option value={props.data.androidProvider}>{props.data.androidProvider}</option> */}
                            {
                                special_condition_on_site_data.map(i => <option value={i} >{i}</option>)}




                        </NativeSelect>
                        <FormHelperText>Uncontrolled</FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item xs={5} >

                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="uncontrolled-native">vehicle propelsion code</InputLabel>
                        <NativeSelect
                            onChange={cVehicle_propelsion_code}
                            // defaultValue={props.data.androidProvider}
                            inputProps={{
                                name: 'name',
                                id: 'uncontrolled-native',
                            }}
                        >
                            <option aria-label="None" value="" />

                            {/* <option value={props.data.androidProvider}>{props.data.androidProvider}</option> */}
                            {
                                vehicle_propelsion_code_data.map(i => <option value={i} >{i}</option>)}




                        </NativeSelect>
                        <FormHelperText>Uncontrolled</FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item xs={4} >

                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="uncontrolled-native">casualty type</InputLabel>
                        <NativeSelect
                            onChange={cCasualty_type}
                            // defaultValue={props.data.androidProvider}
                            inputProps={{
                                name: 'name',
                                id: 'uncontrolled-native',
                            }}
                        >
                            <option aria-label="None" value="" />

                            {/* <option value={props.data.androidProvider}>{props.data.androidProvider}</option> */}
                            {
                                casualty_type_data.map(i => <option value={i} >{i}</option>)}




                        </NativeSelect>
                        <FormHelperText>Uncontrolled</FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item xs={4} >

                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="uncontrolled-native">speed limt</InputLabel>
                        <NativeSelect
                            onChange={cSpeed_limt}
                            // defaultValue={props.data.androidProvider}
                            inputProps={{
                                name: 'name',
                                id: 'uncontrolled-native',
                            }}
                        >
                            <option aria-label="None" value="" />

                            {/* <option value={props.data.androidProvider}>{props.data.androidProvider}</option> */}
                            {
                                speed_limt_data.map(i => <option value={i} >{i}</option>)}




                        </NativeSelect>
                        <FormHelperText>Uncontrolled</FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item xs={4} >

                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="uncontrolled-native">vehicle type</InputLabel>
                        <NativeSelect
                            onChange={cVehicle_type}
                            // defaultValue={props.data.androidProvider}
                            inputProps={{
                                name: 'name',
                                id: 'uncontrolled-native',
                            }}
                        >
                            <option aria-label="None" value="" />

                            {/* <option value={props.data.androidProvider}>{props.data.androidProvider}</option> */}
                            {
                                vehicle_type_data.map(i => <option value={i} >{i}</option>)}




                        </NativeSelect>
                        <FormHelperText>Uncontrolled</FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item xs={4} >

                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="uncontrolled-native">property injury</InputLabel>
                        <NativeSelect
                            onChange={cProperty_injury}
                            // defaultValue={props.data.androidProvider}
                            inputProps={{
                                name: 'name',
                                id: 'uncontrolled-native',
                            }}
                        >
                            <option aria-label="None" value="" />

                            {/* <option value={props.data.androidProvider}>{props.data.androidProvider}</option> */}
                            {
                                property_injury_data.map(i => <option value={i} >{i}</option>)}




                        </NativeSelect>
                        <FormHelperText>Uncontrolled</FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item xs={4} >

                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="uncontrolled-native">region</InputLabel>
                        <NativeSelect
                            onChange={cRegion}
                            // defaultValue={props.data.androidProvider}
                            value={region}
                            inputProps={{
                                name: 'name',
                                id: 'uncontrolled-native',
                            }}
                        >
                            <option aria-label="None" value="" />


                            {/* <option value={props.data.androidProvider}>{props.data.androidProvider}</option> */}

                            {
                                region_data.map(i => { return < option value={i} >{i}</option> })}




                        </NativeSelect>
                        <FormHelperText>Uncontrolled</FormHelperText>
                    </FormControl>
                </Grid>

                <Grid item xs={4} >

                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="uncontrolled-native">zone</InputLabel>
                        <NativeSelect
                            onChange={cZone}
                            // defaultValue={props.data.androidProvider}
                            inputProps={{
                                name: 'name',
                                id: 'uncontrolled-native',
                            }}
                        >
                            <option aria-label="None" value="" />

                            {region === null ? <option value={"please select Region"} >please select Region</option> : zone_data[region].map(i => {
                                console.log("i", i)
                                return <option value={i} >{i}</option>
                            })
                                // region_data.map(i => <option value={i} >{i}</option>)
                            }




                        </NativeSelect>
                        <FormHelperText>Uncontrolled</FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item xs={3} >

                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="uncontrolled-native">wereda</InputLabel>
                        <NativeSelect
                            onChange={cWereda}
                            // defaultValue={props.data.androidProvider}
                            value={wereda}

                            inputProps={{
                                name: 'name',
                                id: 'uncontrolled-native',
                            }}
                        >
                            <option aria-label="None" value="" />


                            {zone === null ? <option value={"please select Region and zone "} >please select Region and zone</option> : wereda_data[zone].map(i => {
                                console.log("i", i)
                                return <option value={i} >{i}</option>
                            })
                                // region_data.map(i => <option value={i} >{i}</option>)
                            }




                        </NativeSelect>
                        <FormHelperText>Uncontrolled</FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item xs={3}>
                    <TextField id="standard-basic" onChange={cDeath} label="Death" />

                </Grid>
                <Grid item xs={3}>
                    <TextField id="standard-basic" onChange={cSlight__injury} label="slight injury" />

                </Grid>
                <Grid item xs={3}>
                    <TextField id="standard-basic" onChange={cMedium_injury} label="medium injury" />

                </Grid>
                <Grid item xs={3}>
                    <TextField id="standard-basic" onChange={cFatal_injury} label="Fatal injury" />

                </Grid>
                <Grid item xs={3} >

                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="uncontrolled-native">action taked</InputLabel>
                        <NativeSelect
                            onChange={cAction_taked}
                            // defaultValue={props.data.androidProvider}
                            inputProps={{
                                name: 'name',
                                id: 'uncontrolled-native',
                            }}
                        >
                            <option aria-label="None" value="" />


                            {
                                action_taked_data.map(i => <option value={i} >{i}</option>)}





                        </NativeSelect>
                        <FormHelperText>Uncontrolled</FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item xs={3} >

                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="uncontrolled-native">cause of accident</InputLabel>
                        <NativeSelect
                            onChange={cCause_of_accident}
                            // defaultValue={props.data.androidProvider}
                            inputProps={{
                                name: 'name',
                                id: 'uncontrolled-native',
                            }}
                        >
                            <option aria-label="None" value="" />


                            {
                                cause_of_accident_data.map(i => <option value={i} >{i}</option>)}





                        </NativeSelect>
                        <FormHelperText>Uncontrolled</FormHelperText>
                    </FormControl>
                </Grid>

                <Button color="primary" onClick={() => {
                    let rains = ''
                    let data = ''
                    if (props.weatherData.weather.hasOwnProperty('rain')) {
                        rains = props.weatherData.weather.rain
                        data = {
                            date,
                            police_force,
                            age_of_driver,
                            sex_of_driver,
                            vehicle_manoeuvre,
                            engine_capacity,
                            road_type,
                            light_condition,
                            weather_main: props.weatherData.weather.weather[0].main,
                            temp: props.weatherData.weather.main.temp,
                            pressure: props.weatherData.weather.main.pressure,
                            humidity: props.weatherData.weather.main.humidity,
                            visibility: props.weatherData.weather.visibility,
                            wind_speed: props.weatherData.weather.wind.speed,
                            rain: rains['1h'],
                            clouds: props.weatherData.weather.clouds.all,
                            speed_limt,
                            casualty_class,
                            latitude: props.locationData.latitude,
                            longitude: props.locationData.longitude,
                            number_of_vehicle,
                            junction_detail,
                            junction_control,
                            special_condition_on_site,
                            vehicle_propelsion_code,
                            casualty_type,
                            vehicle_type,
                            region,
                            zone,
                            wereda,
                            death,
                            slight__injury,
                            medium_injury,

                            action_taked,
                            cause_of_accident,
                            fatal_injury,
                            property_injury,
                            age_of_vehicle,
                            cord_latitude: props.weatherData.weather.coord.lat,
                            cord_longitude: props.weatherData.weather.coord.lon,
                            city: props.weatherData.weather.name

                        }
                        console.log("yess rain")

                        console.log(rains['1h'])
                    } else {

                        data = {
                            date,
                            police_force,
                            age_of_driver,
                            sex_of_driver,
                            vehicle_manoeuvre,
                            engine_capacity,
                            road_type,
                            light_condition,
                            weather_main: props.weatherData.weather.weather[0].main,
                            temp: props.weatherData.weather.main.temp,
                            pressure: props.weatherData.weather.main.pressure,
                            humidity: props.weatherData.weather.main.humidity,
                            visibility: props.weatherData.weather.visibility,
                            wind_speed: props.weatherData.weather.wind.speed,
                            rain: 0,
                            clouds: props.weatherData.weather.clouds.all,
                            speed_limt,
                            casualty_class,
                            latitude: props.locationData.latitude,
                            longitude: props.locationData.longitude,
                            number_of_vehicle,
                            junction_detail,
                            junction_control,
                            special_condition_on_site,
                            vehicle_propelsion_code,
                            casualty_type,
                            vehicle_type,
                            region,
                            zone,
                            wereda,
                            death,
                            slight__injury,
                            medium_injury,

                            action_taked,
                            cause_of_accident,
                            fatal_injury,
                            property_injury,
                            age_of_vehicle,
                            cord_latitude: props.weatherData.weather.coord.lat,
                            cord_longitude: props.weatherData.weather.coord.lon,
                            city: props.weatherData.weather.name

                        }
                    }

                    console.log("weather ", props.weatherData.weather)
                    console.log("final data ", data)

                    dispatch(sendAccidentToApi(data));
                }}>change</Button>
            </Grid>
}</div>
    );
}
const mapStateToProps = state => ({
    locationData: state.locationData,
    weatherData: state.weatherData,
    accident:state.accident
})
export default connect(mapStateToProps)(AccidentField);
