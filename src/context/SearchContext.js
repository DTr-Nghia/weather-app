import React, { useContext, useReducer, useEffect } from "react";
import reducer from "../reducer/weatherReducer";
import axios from "axios";
import {
  GET_DATA_BY_NAME,
  GET_DATA_BY_NAME_SUCCESS,
  GET_DATA_BY_NAME_ERROR,
  UPDATE_SEARCH,
} from "../actions";

const URL2 = "https://api.openweathermap.org/data/2.5/weather";
const key = process.env.REACT_APP_WEATHER_API_KEY;
const SearchContext = React.createContext();
const initialValue = {
  data_by_name: [],
  cityName: "Ha Noi",
  prevName:'',
  loading: false,
  error: "",
};
export const SearchProvider = ({ children }) => {
  console.log(key)
  const [state, dispatch] = useReducer(reducer, initialValue);
  const updateSearch = (name) => {
      dispatch({ type: UPDATE_SEARCH, payload: name });
  };
  const getDatabyName = async (cityName) => {
    dispatch({ type: GET_DATA_BY_NAME });
    try {
      const res = await axios.get(URL2, {
        params: { q: cityName, appid: key },
      });
      const data = res.data;
      dispatch({ type: GET_DATA_BY_NAME_SUCCESS, payload: data });
    } catch (err) {
      dispatch({ type: GET_DATA_BY_NAME_ERROR });
    }
  };
  useEffect(() => {
    getDatabyName(state.cityName);
  }, [state.cityName]);
  return (
    <SearchContext.Provider value={{ ...state, updateSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => {
  return useContext(SearchContext);
};
