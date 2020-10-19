import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import CheckIcon from '@material-ui/icons/Check';
import SaveIcon from '@material-ui/icons/Save';
import { useSelector, useDispatch, connect } from 'react-redux';
import {fetchWeather} from "../Action/index"
import CloudDoneIcon from '@material-ui/icons/CloudDone';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { green ,red} from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative',
  },
  buttonSuccess: {
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
  },
  buttonFail: {
    backgroundColor: red[500],
    '&:hover': {
      backgroundColor: red[700],
    },
  },
  fabProgress: {
    color: green[500],
    position: 'absolute',
    top: -6,
    left: -6,
    zIndex: 1,
  },
  buttonProgress: {
    color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
}));
 function CircularIntegration(props) {
  const classes = useStyles();
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const dispatch= useDispatch();
  const timer = React.useRef();

  const buttonSuccess = clsx({
    [classes.buttonSuccess]: success,
  });
  const buttonFail = clsx({
    [classes.buttonSuccess]: success,
  });
  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const handleButtonClick = () => {

dispatch(fetchWeather(props.locationData.latitude,props.locationData.longitude))
     if (!loading) {
      setSuccess(false);
      setLoading(true);
      timer.current = window.setTimeout(() => {
        setSuccess(true);
        setLoading(false);
      }, 2000);
    }
  };
  console.log("is loading ")

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
       { <Fab
          aria-label="save"
          color={props.weatherData.success===false?'secondary':"primary"}
          className={props.weatherData.success===true?buttonSuccess:null}
          onClick={handleButtonClick}
        >
          { props.weatherData.success ?<CloudDoneIcon />:<CloudUploadIcon />}
        </Fab>
 }
        {props.weatherData.isLoading===true && <CircularProgress size={68} className={classes.fabProgress} />}
     
     {props.weatherData.error!==null?<div>{props.weatherData.error}</div>:null}
     { props.weatherData.success ?<div>{props.weatherData.weather.name}</div>:null}
      </div>
     
    </div>
  );
}
const mapStateToProps = state => ({
    locationData: state.locationData,
    weatherData:state.weatherData
  })
export default connect(mapStateToProps)(CircularIntegration);
