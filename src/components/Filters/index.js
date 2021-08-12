import SourceCityComponent from './sourcecity';
import DestinationCityComponent from './destinationcity';
import TravelDateComponent from './traveldate';
import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';

function FilterComponent(props){
    const [destCity, setdestCity] = useState(null);
    const [srcCity, setsrcCity] = useState(null);
    const [travelDate, settravelDate] = useState(null);
    function searchFlight()
    {
        props.onChange(srcCity, destCity, travelDate);
    }
    
    return(
        <div>
            <div class="FilterHeader">Filter</div>
            <SourceCityComponent click={(e)=>{
                setsrcCity(e.srcValue);
            }} init ={srcCity}></SourceCityComponent>
            <DestinationCityComponent click={(e)=>{
                setdestCity(e.destValue);
            }} init = {destCity} name="destValue"></DestinationCityComponent>
            <TravelDateComponent click={(e)=>{
                 settravelDate(e.travelDate);
            }} init = {travelDate} ></TravelDateComponent>

            <div class="seach-container">
                <Button variant="contained" color="primary" onClick={() => { searchFlight() }}> Search </Button>
            </div>
        </div>
        
    )
} 
export default FilterComponent;

