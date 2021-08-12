import axios from 'axios';
import * as data from './../reducers/data/filghtData.json';
import {
  REQUEST_ALLFLIGHTDETAILS,
  RECEIVE_ALLFLIGHTDETAILS
} from "./types";

export const fetchSpaceByFilter = (departureCity, arrivalCity, travelDate) => async dispatch => {

  try {
    dispatch({ type: REQUEST_ALLFLIGHTDETAILS});
    const filterData = frameData(departureCity, arrivalCity, travelDate);
    dispatch({ type: RECEIVE_ALLFLIGHTDETAILS, payload: filterData });
  } catch(e) {
    console.log(e);
    dispatch({ type: RECEIVE_ALLFLIGHTDETAILS, payload: [] });
  }
};

function frameData(departureCity, arrivalCity, travelDate){
    let items = data.data;
    if(departureCity !=null){
      items= items.filter((item)=>item.departureAirportAddress.city == departureCity);
    }
    if(arrivalCity!= null){
      items= items.filter((item)=>item.arrivalAirportAddress.city == arrivalCity);
    }
    if(travelDate != null){
      items= items.filter((item)=>new Date(item.travelDate).toDateString() == new Date(travelDate).toDateString());
    }
    return items;
}


