import React, { useContext, useReducer, useEffect } from "react";
import reducer from "../reducer/weatherReducer";
import axios from "axios";
import { useSearchContext } from "./SearchContext";
import { GET_DATA, GET_DATA_SUCCESS, GET_DATA_ERROR } from "../actions";

const URL1 = "https://api.openweathermap.org/data/2.5/onecall";
const key = "b7826da171eb98af87e75925d0973bb8";
const initialValue = {
  data: [],
  loading: false,
  error: false,
};
const WeatherContext = React.createContext();
export const WeatherProvider = ({ children }) => {
  const { data_by_name } = useSearchContext();
  const [state, dispatch] = useReducer(reducer, initialValue);

  const getWeatherData = async (latitude, longitude) => {
    dispatch({ type: GET_DATA });
    try {
      const res = await axios.get(URL1, {
        params: { lat: latitude, lon: longitude, units: "metric", appid: key },
      });
      const data = res.data;
      dispatch({ type: GET_DATA_SUCCESS, payload: data });
    } catch (err) {
      dispatch({ type: GET_DATA_ERROR });
    }
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      getWeatherData(data_by_name?.coord?.lat, data_by_name?.coord?.lon);
    }, 1000);
    return () => clearTimeout(timer);
  }, [data_by_name?.coord?.lat, data_by_name?.coord?.lon]);
  return (
    <WeatherContext.Provider value={{ ...state }}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeatherContext = () => {
  return useContext(WeatherContext);
};
