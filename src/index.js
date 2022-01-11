import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { WeatherProvider } from "./context/WeatherContext";
import { SearchProvider } from "./context/SearchContext";

ReactDOM.render(
  <SearchProvider>
    <WeatherProvider>
      <App />
    </WeatherProvider>
  </SearchProvider>,
  document.getElementById("root")
);
