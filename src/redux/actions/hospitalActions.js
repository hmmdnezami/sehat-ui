import { toast } from "react-toastify";
import axiosUtil from "../../utils/axiosUtil";
import { ADD_FACILITY_FAILURE, ADD_FACILITY_REQUEST, ADD_FACILITY_SUCCESS, GET_ALL_HEALTHCARE_FACILITIES_FAILURE, GET_ALL_HEALTHCARE_FACILITIES_REQUEST, GET_ALL_HEALTHCARE_FACILITIES_SUCCESS, GET_HEALTHCARE_FACILITY_FAILURE, GET_HEALTHCARE_FACILITY_REQUEST, GET_HEALTHCARE_FACILITY_SUCCESS } from "../constants/hospitalConstants";

export const addFacility = (healthcareFacility) => async (dispatch) => {
    try {
      dispatch({
        type: ADD_FACILITY_REQUEST,
      });
  
      const response = await axiosUtil.post(`/v2/healthcare`, healthcareFacility);
      console.log(response);
  
      dispatch({
        type: ADD_FACILITY_SUCCESS,
        payload: response.data,
      });
      toast.success("Facility added Successful");
    } catch (err) {
      console.error(err);
      dispatch({
        type: ADD_FACILITY_FAILURE,
        payload: err.message,
      });
    }
  };

  export const getAllHealthcareFacilitites = () => async (dispatch) => {
    try {
      dispatch({
        type: GET_ALL_HEALTHCARE_FACILITIES_REQUEST,
      });
  
      const response = await axiosUtil.get(`/v2/healthcare`);
      console.log(response);
  
      dispatch({
        type: GET_ALL_HEALTHCARE_FACILITIES_SUCCESS,
        payload: response.data,
      });

    } catch (err) {
      console.error(err);
      dispatch({
        type: GET_ALL_HEALTHCARE_FACILITIES_FAILURE,
        payload: err.message,
      });
    }
  };

  export const getHealthcareFacility = (healthCardId) => async (dispatch) => {
    try {
      dispatch({
        type: GET_HEALTHCARE_FACILITY_REQUEST,
      });
  
      const response = await axiosUtil.get(`/v2/healthcare/${healthCardId}`);
      console.log(response);
  
      dispatch({
        type: GET_HEALTHCARE_FACILITY_SUCCESS,
        payload: response.data,
      });

    } catch (err) {
      console.error(err);
      dispatch({
        type: GET_HEALTHCARE_FACILITY_FAILURE,
        payload: err.message,
      });
    }
  };