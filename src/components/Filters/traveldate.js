import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));
function TravelDateComponent(props) {
    const classes = useStyles();

    function handleDateChange(e) {
        props.click({
            travelDate: e.target.value
        });
    }
    return (
        <div>
            <div id="landlabel" class="flight-header"> Travel Date  </div>
            <div class='flex-container' aria-labelledby="landlabel">
                <form className={classes.container} noValidate>
                    <TextField
                        id="date"
                        type="date"
                        defaultValue={props.init}
                        className={classes.textField}
                        onChange={(e) => { handleDateChange(e) }}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </form>
            </div>
        </div>
    )
}


export default TravelDateComponent;  