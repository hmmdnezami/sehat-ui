// bookingReducer.js
import { BOOKING_REQUEST, BOOKING_SUCCESS, BOOKING_FAILURE } from '../constants/bookingConstants';

export const bookingReducer = (state = {}, action) => {
  switch (action.type) {
    case BOOKING_REQUEST:
      return { loading: true };
    case BOOKING_SUCCESS:
      return { loading: false, bookingDetails: action.payload };
    case BOOKING_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
