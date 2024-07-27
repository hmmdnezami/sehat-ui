import { configureStore, combineReducers } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import {
  driverSignupRequestReducer,
  getAmbulanceNearUSerReducer,
  getHospitalByCityReducer,
  loginRequestReducer,
  riderSignupRequestReducer,
  userBookingReducer,
} from "./reducers/userReducer";
import { getDriverWithoutAmbulanceReducer, registeredAmbulanceReducer } from "./reducers/driverReducer";
import { addFacilityReducer, getAllHealthcareFacilititesReducer, getHospitalInfoReducer } from "./reducers/hospitalReducer";

const adminInfoFromStorage = localStorage.getItem("admin")
  ? JSON.parse(localStorage.getItem("admin"))
  : null;

const reducer = combineReducers({
  loginRequest: loginRequestReducer,
  riderSignup: riderSignupRequestReducer,
  driverSignup: driverSignupRequestReducer,
  getHospitalsByCity: getHospitalByCityReducer,
  getAmbulanceNearUser: getAmbulanceNearUSerReducer,
  userBooking: userBookingReducer,
  getDriverWithoutAmbulance: getDriverWithoutAmbulanceReducer,
  registeredAmbulance: registeredAmbulanceReducer,
  addFacility: addFacilityReducer,
  getAllHealthcareFacilitites: getAllHealthcareFacilititesReducer,
  getHospitalInfo: getHospitalInfoReducer,
});

const initialState = {
  loginRequest: { loginInfo: adminInfoFromStorage },
};

const store = configureStore({
  reducer,
  preloadedState: initialState,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});
export default store;
