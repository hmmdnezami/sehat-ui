export const getDriverWithoutAmbulanceReducer = (state = {}, action) => {
    switch (action.type) {
      case "GET_DRIVER_WITHOUT_AMBULANCE_REQUEST":
        return { ...state, loading: true };
  
      case "GET_DRIVER_WITHOUT_AMBULANCE_SUCCESS":
        return {
          loading: false,
          drivers: action.payload,
        };
  
      case "GET_DRIVER_WITHOUT_AMBULANCE_FAILURE":
        return { loading: false, drivers: [], error: action.payload };
  
      default:
        return state;
    }
  };

  export const registeredAmbulanceReducer = (state = {}, action) => {
    switch (action.type) {
      case "REGISTERED_AMBULANCE_REQUEST":
        return { ...state, loading: true };
  
      case "REGISTERED_AMBULANCE_SUCCESS":
        return {
          loading: false,
          ambulances: action.payload,
        };
  
      case "REGISTERED_AMBULANCE_FAILURE":
        return { loading: false, ambulances: [], error: action.payload };
  
      default:
        return state;
    }
  };