


export const addAmbulanceFacilityReducer = (state = {}, action) => {
    switch (action.type) {
      case " ":
        return { ...state, loading: true };
  
      case "ADD_AMBULANCE_FACILITY_SUCCESS":
        return {
          loading: false,
          facility: action.payload,
        };
  
      case "ADD_AMBULANCE_FACILITY_FAILURE":
        return { loading: false, facility: [], error: action.payload };
  
      default:
        return state;
    }
  };
