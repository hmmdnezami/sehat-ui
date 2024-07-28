import { toast } from "react-toastify";
import axiosUtil from "../../utils/axiosUtil";
import {ADD_AMBULANCE_FACILITY_REQUEST,ADD_AMBULANCE_FACILITY_SUCCESS,ADD_AMBULANCE_FACILITY_FAILURE } from "../constants/ambulanceConstants";
import axios from "axios";
import { url } from "../../constants";


export const addAmbulanceFacility = (formData) => async (dispatch) => {
    try {
      dispatch({
        type: ADD_AMBULANCE_FACILITY_REQUEST,
      });
  
      const response = await axios.post(`${url}/v2/ambulances`, formData);
      console.log(response);
  
      dispatch({
        type: ADD_AMBULANCE_FACILITY_SUCCESS,
        payload: response.data,
      });
      toast.success("Ambulance added Successful");
    } catch (err) {
      console.error(err);
      dispatch({
        type: ADD_AMBULANCE_FACILITY_FAILURE,
        payload: err.message,
      });
    }
  };
