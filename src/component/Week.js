import React, { useState } from "react";
import styled from "styled-components";
import { timeFormat } from "../utils/TimeFormat";
import { useWeatherContext } from "../context/WeatherContext";
const Week = () => {
  const { data } = useWeatherContext();
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const [dailyData, setDailyData] = useState(data?.daily[0]);
  const dateFormat = (strDate) => {
    const date = new Date(strDate * 1000);
    return (
      days[date.getDay()] + ", " + date.getDate() + "/" + (date.getMonth() + 1)
    );
  };
  const handleShowInfo = (e, index) => {
    setDailyData(e);
  };
  return (
    <Wrapper>
      <div className="row">
        <div className="weather-by-week">
          {data?.daily.map((item, index) => {
            return (
              <div
                className="day col-12 col-6 col-3"
                key={index}
                onClick={() => handleShowInfo(item, index)}>
                <div
                  className={`${
                    item.dt === dailyData.dt ? "show-info" : ""
                  } day-content h-100`}>
                  <p className="day-text">{dateFormat(item.dt)}</p>
                  <div className="day-temp">
                    <img
                      src={`https://openweathermap.org/img/w/${item.weather[0]?.icon}.png`}
                      alt="icon"
                      className="img-fluid"
                    />
                    <p className="temp-text">
                      {Math.round(item.temp.min)}° - {Math.round(item.temp.max)}
                      °
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="detail-info h-100">
        <p className="day-text">{dateFormat(dailyData.dt)}</p>
        <div className="row">
          <div className="col-6 col-12">
            <p className="info">Temp current : {dailyData.temp?.day} °C</p>
            <p className="info">
              Temp : {dailyData.temp?.min} °C - {dailyData.temp?.max} °C
            </p>
            <p className="info">Humidity : {dailyData.humidity} %</p>
            <p className="info">
              Wind speed : {Math.round(dailyData.wind_speed * 3.6 * 100) / 100}{" "}
              km/h
            </p>
          </div>
          <div className="col-6 col-12">
            <p className="info">Sunrise : {timeFormat(dailyData.sunrise)}</p>
            <p className="info">Sunset : {timeFormat(dailyData.sunset)}</p>
            <p className="info">
              Description : {dailyData?.weather[0]?.description}
            </p>
            <p className="info">
              Atmospheric pressure : {dailyData?.pressure} hPa
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  p {
    margin-top: 0;
    margin-bottom: 1rem;
  }
  .row > * {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }
  .weather-by-week {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    .day {
      flex: 0 0 auto;
      padding: 0.25rem;
      cursor: pointer;
      .day-content {
        padding: 0.5rem;
        border-radius: 0.3rem;
        background-color: #fff;
        .day-text {
          color: rgb(0 0 0/26%);
          font-size: 1rem;
        }
        .day-temp {
          text-align: center;
          .img-fluid {
            max-width: 100%;
            height: auto;
            vertical-align: middle;
          }
          .temp-text {
            font-weight: 700;
            font-size: 1rem;
            color: #6c757d;
          }
        }
      }
      .show-info {
        background-color: #0dcaf0;
      }
    }
  }
  .detail-info {
    background-color: #fff;
    border-radius: 0.3rem;
    padding: 0.5rem;
    margin-top: 3rem;
    margin-bottom: 3rem;
    .day-text {
      color: #6c757d;
      font-size: 1.25rem;
    }
    .info {
      font-size: 1rem;
      color: #6c757d;
    }
    .row > * {
      padding-left: 0.75rem;
      padding-right: 0.75rem;
    }
  }
`;
export default Week;
