// import React from 'react';
// import Map from "./Component/Map"
// import {Grid } from "@material-ui/core"
// function App() {
//   return (
//     <div style={{height: `100px`, width: `100px`}} >
//       <Map/>
//  </div>
//   );
// }

// export default App;
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Map from "./Component/Map"
import SelectFieldComp from "./Component/AccidentRegistrationForm"
import {zone_data} from "./Component/data"
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function App() {
  const classes = useStyles();
console.log(zone_data['Addis_Abeba'].map(i=>console.log(i)))
  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={6} style={{ position: 'relative', height: '100vh' }}>
        <Map/>
        </Grid>
        <Grid item xs={6}>
          {/* <Paper className={classes.paper}>xs=6</Paper> */}
          <SelectFieldComp/>
        </Grid>
       
      
        
         
      </Grid>
    </div>
  );
}
