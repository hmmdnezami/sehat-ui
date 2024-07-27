export const addFacilityReducer = (state = {}, action) => {
    switch (action.type) {
      case "ADD_FACILITY_REQUEST":
        return { ...state, loading: true };
  
      case "ADD_FACILITY_SUCCESS":
        return {
          loading: false,
          facility: action.payload,
        };
  
      case "ADD_FACILITY_FAILURE":
        return { loading: false, facility: [], error: action.payload };
  
      default:
        return state;
    }
  };

  export const getAllHealthcareFacilititesReducer = (state = {}, action) => {
    switch (action.type) {
      case "GET_ALL_HEALTHCARE_FACILITIES_REQUEST":
        return { ...state, loading: true };
  
      case "GET_ALL_HEALTHCARE_FACILITIES_SUCCESS":
        return {
          loading: false,
          facilities: action.payload,
        };
  
      case "GET_ALL_HEALTHCARE_FACILITIES_FAILURE":
        return { loading: false, facilities: [], error: action.payload };
  
      default:
        return state;
    }
  };

  export const getHospitalInfoReducer = (state = {}, action) => {
    switch (action.type) {
      case "GET_HOSPITAL_INFO_REQUEST":
        return { ...state, loading: true };
  
      case "GET_HOSPITAL_INFO_SUCCESS":
        return {
          loading: false,
          hospitalInfo: action.payload,
        };
  
      case "GET_HOSPITAL_INFO_FAILURE":
        return { loading: false, hospitalInfo: [], error: action.payload };
  
      default:
        return state;
    }
  };