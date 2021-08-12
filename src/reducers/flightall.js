import {
  REQUEST_ALLFLIGHTDETAILS,
  RECEIVE_ALLFLIGHTDETAILS
} from "../action/types";

const INITIAL_STATE = {
  data: [],
  isFetching: false,
  lastUpdate: Date.now()
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_ALLFLIGHTDETAILS: {
      return { ...state, isFetching: true };
    }
    case RECEIVE_ALLFLIGHTDETAILS: {
      return { ...state, isFetching: false, data: action.payload };
    }
    default:
      return state;
  }
};