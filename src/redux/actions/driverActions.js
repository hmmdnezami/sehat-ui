import { toast } from "react-toastify";
import axiosUtil from "../../utils/axiosUtil";
import { GET_DRIVER_WITHOUT_AMBULANCE_FAILURE, GET_DRIVER_WITHOUT_AMBULANCE_REQUEST, GET_DRIVER_WITHOUT_AMBULANCE_SUCCESS, REGISTERED_AMBULANCE_FAILURE, REGISTERED_AMBULANCE_REQUEST, REGISTERED_AMBULANCE_SUCCESS } from "../constants/driverConstants";

export const getDriverWithoutAmbulance = (status) => async (dispatch) => {
    try {
      dispatch({
        type: GET_DRIVER_WITHOUT_AMBULANCE_REQUEST,
      });
  
      const response = await axiosUtil.get(`/v2/driver/${status}`);
      console.log(response);
  
      dispatch({
        type: GET_DRIVER_WITHOUT_AMBULANCE_SUCCESS,
        payload: response.data,
      });

    } catch (err) {
      console.error(err);
      dispatch({
        type: GET_DRIVER_WITHOUT_AMBULANCE_FAILURE,
        payload: err.message,
      });
    }
  };

  export const registeredAmbulance = (driverId, ambulance) => async (dispatch) => {
    try {
      dispatch({
        type: REGISTERED_AMBULANCE_REQUEST,
      });
  
      const response = await axiosUtil.put(`/v2/driver/ambulance/${driverId}`, ambulance);
      console.log(response);
  
      dispatch({
        type: REGISTERED_AMBULANCE_SUCCESS,
        payload: response.data,
      });
      toast.success("Registered Successful");
    } catch (err) {
      console.error(err);
      dispatch({
        type: REGISTERED_AMBULANCE_FAILURE,
        payload: err.message,
      });
    }
  };