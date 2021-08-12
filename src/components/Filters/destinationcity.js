import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select'; 
const useStyless = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 190,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
function DestinationCityComponent(props){
    
      const handleChange = (e)=> {
        props.click({
            [props.name]: e.target.value
        });
    }
    const classes = useStyless();
    return (
         <div> 
            <div id="destcity" class="flight-header">  Destination City  </div>
            <div class='flex-container'>
            <FormControl className={classes.formControl}>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={props.init}
                        onChange={(e)=>{handleChange(e)}}
                        style={{width: '190px'}}>
                        <MenuItem value="San Francisco">San Francisco</MenuItem>
                        <MenuItem value="Los Angeles">Los Angeles</MenuItem>
                    </Select>
                </FormControl>
            </div>
         </div>
    )
}
  

export default DestinationCityComponent;