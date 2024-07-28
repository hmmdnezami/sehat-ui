import axios from 'axios';
import { BOOKING_REQUEST, BOOKING_SUCCESS, BOOKING_FAILURE } from '../constants/bookingConstants';

export const createBooking = (hospitalId) => async (dispatch) => {
  try {
    dispatch({ type: BOOKING_REQUEST });

    const response = await axios.post('/api/book', { hospitalId });
    
    dispatch({
      type: BOOKING_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: BOOKING_FAILURE,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};
