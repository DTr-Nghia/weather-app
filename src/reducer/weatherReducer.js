import {
  GET_DATA,
  GET_DATA_SUCCESS,
  GET_DATA_ERROR,
  GET_DATA_BY_NAME,
  GET_DATA_BY_NAME_SUCCESS,
  GET_DATA_BY_NAME_ERROR,
  UPDATE_SEARCH,
} from "../actions";

const weatherReducer = (state, action) => {
  switch (action.type) {
    case GET_DATA:
      return { ...state, loading: true };
    case GET_DATA_SUCCESS:
      return { ...state, data: action.payload, loading: false };
    case GET_DATA_ERROR:
      return { ...state, loading: false, error: true };
    case GET_DATA_BY_NAME:
      return { ...state, loading: true };
    case GET_DATA_BY_NAME_SUCCESS:
      return {
        ...state,
        data_by_name: action.payload,
        loading: false,
        error: "",
      };
    case GET_DATA_BY_NAME_ERROR:
      return { ...state, loading: false, error: "Not found city" };
    case UPDATE_SEARCH:
      return { ...state, cityName: action.payload, prevName:state.cityName };
    default:
      throw new Error(`No Matching "${action.type}" - action type`);
  }
};
export default weatherReducer;
