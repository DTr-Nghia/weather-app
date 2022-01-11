import React from "react";
import styled from "styled-components";
import { useWeatherContext } from "../context/WeatherContext";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    } from 'chart.js';
import { Line } from "react-chartjs-2";
import { timeFormat } from "../utils/TimeFormat";
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
    );
const Hour = () => {
  const { data } = useWeatherContext();
  const hours = [];
  const temp = [];
  const feels = [];
  const getHours = data?.hourly?.map(item => [...hours, timeFormat(item.dt)]);
  const getTemp = data?.hourly?.map(item => [...temp, item.temp]);
  const getFeels = data?.hourly?.map(item => [...feels, item.feels_like]);
  const chartData = [
    {
      data: getTemp.flat(),
      label: " Temp (°C)",
      borderColor: "#8e5ea2",
      fill: false,
    },
    {
      data: getFeels.flat(),
      label: " Feel like (°C)",
      borderColor: "#3cba9f",
      fill: false,
    },
  ];
  return (
    <Wrapper>
      <Line
        data={{ labels: getHours, datasets:[...chartData] }}
        options={{
          title: {
            display: true,
            text: "Weather",
          },
          legend: {
            display: true,
            position: "bottom",
          },
        }}
      />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  border-radius: 0.3rem;
  background-color: #fff;
  padding: 0.5rem;
  margin: 0.5rem;
`;
export default Hour;
