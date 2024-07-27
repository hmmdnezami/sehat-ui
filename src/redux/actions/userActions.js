import axios from "axios";
import { url } from "../../constants";
import {
  DRIVER_SIGNUP_FAILURE,
  DRIVER_SIGNUP_REQUEST,
  DRIVER_SIGNUP_SUCCESS,
  GET_AMBULANCE_NEAR_USER_FAILURE,
  GET_AMBULANCE_NEAR_USER_REQUEST,
  GET_AMBULANCE_NEAR_USER_SUCCESS,
  GET_HOSPITAL_BY_CITY_FAILURE,
  GET_HOSPITAL_BY_CITY_REQUEST,
  GET_HOSPITAL_BY_CITY_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  RIDER_SIGNUP_FAILURE,
  RIDER_SIGNUP_REQUEST,
  RIDER_SIGNUP_SUCCESS,
  USER_BOOKING_FAILURE,
  USER_BOOKING_REQUEST,
  USER_BOOKING_SUCCESS,
  USER_LOGOUT,
} from "../constants/userConstants";
import { toast } from "react-toastify";

export const loginRequest = (bodyData) => async (dispatch) => {
  try {
    dispatch({
      type: LOGIN_REQUEST,
    });

    const response = await axios.post(`${url}/auth/signin`, bodyData);
    console.log(response);

    const { accessToken } = response.data;
    console.log("token:", accessToken);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: response.data,
    });

    localStorage.setItem("authToken", accessToken);
    toast.success("Login Successful");
  } catch (err) {
    toast.error("Incorrect Username or Password");

    console.error(err);
    dispatch({
      type: LOGIN_FAILURE,
      payload: err.message,
    });
  }
};

export const logout = () => async (dispatch) => {
  try {
    localStorage.removeItem("authToken");
    dispatch({ type: USER_LOGOUT });
  } catch (error) {
    console.log(error);
  }
};

export const riderSignup = (bodyData) => async (dispatch) => {
  try {
    dispatch({
      type: RIDER_SIGNUP_REQUEST,
    });

    const response = await axios.post(`${url}/auth/rider/signup`, bodyData);

    dispatch({
      type: RIDER_SIGNUP_SUCCESS,
      payload: response.data,
    });
    toast.success("Signup Successful");
  } catch (err) {
    console.error(err);
    dispatch({
      type: RIDER_SIGNUP_FAILURE,
      payload: err.message,
    });
  }
};

export const driverSignup = (bodyData) => async (dispatch) => {
  try {
    dispatch({
      type: DRIVER_SIGNUP_REQUEST,
    });

    const response = await axios.post(`${url}/auth/driver/signup`, bodyData);
    console.log(response);

    dispatch({
      type: DRIVER_SIGNUP_SUCCESS,
      payload: response.data,
    });
    toast.success("Signup Successful");
  } catch (err) {
    console.error(err);
    dispatch({
      type: DRIVER_SIGNUP_FAILURE,
      payload: err.message,
    });
  }
};

export const getHospitalsByCity = (cityName) => async (dispatch) => {
  try {
    dispatch({
      type: GET_HOSPITAL_BY_CITY_REQUEST,
    });

    const response = await axios.get(`${url}/v2/heathCare/city/${cityName}`);
    // const response = await axios.get(`${url}/v2/healthcare`);


    console.log("respone from city api", response);

    dispatch({
      type: GET_HOSPITAL_BY_CITY_SUCCESS,
      payload: response.data,
    });
  } catch (err) {
    console.error(err);
    dispatch({
      type: GET_HOSPITAL_BY_CITY_FAILURE,
      payload: err.message,
    });
  }
};

export const getAmbulanceNearUser = (cityName) => async (dispatch) => {
  try {
    dispatch({
      type: GET_AMBULANCE_NEAR_USER_REQUEST,
    });

    const response = await axios.get(`/v2/ambulance/city/${cityName}`);
    console.log(response);

    dispatch({
      type: GET_AMBULANCE_NEAR_USER_SUCCESS,
      payload: response.data,
    });
  } catch (err) {
    console.error(err);
    dispatch({
      type: GET_AMBULANCE_NEAR_USER_FAILURE,
      payload: err.message,
    });
  }
};

export const userBooking = (bodyData, userId) => async (dispatch) => {
  try {
    dispatch({
      type: USER_BOOKING_REQUEST,
    });

    const response = await axios.post(`/v2/booking/user/${userId}`, bodyData);
    console.log(response);

    dispatch({
      type: USER_BOOKING_SUCCESS,
      payload: response.data,
    });
    toast.success("Booking Successful");
  } catch (err) {
    console.error(err);
    dispatch({
      type: USER_BOOKING_FAILURE,
      payload: err.message,
    });
  }
};
