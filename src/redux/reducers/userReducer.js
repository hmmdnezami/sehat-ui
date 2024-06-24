export const loginRequestReducer = (state = {}, action) => {
  switch (action.type) {
    case "LOGIN_REQUEST":
      return { ...state, loading: true};

    case "LOGIN_SUCCESS":
      return { loading: false, token: action.payload.token, userInfo: action.payload};

    case "LOGIN_FAILURE":
      return { loading: false, error: action.payload, };
    default:
      return state;
  }
};

export const riderSignupRequestReducer = (state = {}, action) => {
  switch (action.type) {
    case "RIDER_SIGNUP_REQUEST":
      return { ...state, loading: true, error: null };

    case "RIDER_SIGNUP_SUCCESS":
      return { loading: false, riderSignupInfo: action.payload, error: null };

    case "RIDER_SIGNUP_FAILURE":
      return { loading: false, riderSignupInfo: null, error: action.payload };
    default:
      return state;
  }
};

export const driverSignupRequestReducer = (state = {}, action) => {
  switch (action.type) {
    case "DRIVER_SIGNUP_REQUEST":
      return { ...state, loading: true, error: null };

    case "DRIVER_SIGNUP_SUCCESS":
      return {
        loading: false,
        driverSignupInfo: action.payload.user,
        error: null,
      };

    case "DRIVER_SIGNUP_FAILURE":
      return { loading: false, driverSignupInfo: null, error: action.payload };
    default:
      return state;
  }
};

export const getHospitalByCityReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_HOSPITALS_BY_CITY_REQUEST":
      return { ...state, loading: true };

    case "GET_HOSPITALS_BY_CITY_SUCCESS":
      return {
        loading: false,
        hospitals: action.payload.data,
      };

    case "GET_HOSPITALS_BY_CITY_FAILURE":
      return { loading: false, hospitals: [], error: action.payload };

    default:
      return state;
  }
};

export const getAmbulanceNearUSerReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_AMBULANCE_NEAR_USER_REQUEST":
      return { ...state, loading: true };

    case "GET_AMBULANCE_NEAR_USER_SUCCESS":
      return {
        loading: false,
        ambulances: action.payload,
      };

    case "GET_AMBULANCE_NEAR_USER_FAILURE":
      return { loading: false, ambulances: [], error: action.payload };

    default:
      return state;
  }
};

export const userBookingReducer = (state = {}, action) => {
  switch (action.type) {
    case "USER_BOOKING_REQUEST":
      return { ...state, loading: true };

    case "USER_BOOKING_SUCCESS":
      return {
        loading: false,
        booking: action.payload,
      };

    case "USER_BOOKING_FAILURE":
      return { loading: false, booking: [], error: action.payload };

    default:
      return state;
  }
};

