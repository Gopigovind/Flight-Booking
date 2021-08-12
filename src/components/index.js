import React, {useState} from 'react';
import FilterComponent from './Filters';
import Fligts from './FlightsList';

function Main(){
    const [departureCity, setdepartureCity] = useState(null);
    const [arrivalCity, setarrivalCity] = useState(null);
    const [travelDate, settravelDate] = useState(null);
    return (    
        <div>
        <div  role="heading" class="header shadow"> Flight Booking </div> 
        <div className="container">
            
            <div class="left-container">
                <FilterComponent onChange = {(departureCity, arrivalCity, travelDate)=>{
                    setdepartureCity(departureCity);
                    setarrivalCity(arrivalCity);
                    settravelDate(travelDate);
                }}></FilterComponent>
            </div>
            <div class="right-container">
                <Fligts departureCity={departureCity} arrivalCity ={arrivalCity} travelDate={travelDate}></Fligts>
            </div>        
        </div>
        <div role="contentinfo" class="footer shadow"> Developed by Gopi </div> 
        </div>
      );
    
}

export default Main;

