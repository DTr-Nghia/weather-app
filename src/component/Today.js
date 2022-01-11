import styled from "styled-components";
import { FiSun } from "react-icons/fi";
import { WiDayWindy, WiHumidity, WiSunrise, WiSunset } from "react-icons/wi";
import { IoMdSpeedometer } from "react-icons/io";
import { FaThermometerEmpty } from "react-icons/fa";
import { useWeatherContext } from "../context/WeatherContext";
import { timeFormat } from "../utils/TimeFormat";
const Today = () => {
  const { data } = useWeatherContext();
  return (
    <Wrapper>
      <div className="row">
        <div className="today-contents">
          <div className="item-wrapper col-6 col-4 col-12">
            <div className="item h-100">
              <p className="title">UV index</p>
              <div className="weather-parameter">
                <FiSun className="uv icon-size" />
                <p className="parameter">{data?.current?.uvi}</p>
              </div>
            </div>
          </div>
          <div className="item-wrapper col-6 col-4 col-12">
            <div className="item h-100">
              <p className="title">Wind Status</p>
              <div className="weather-parameter">
                <WiDayWindy className="wind icon-size" />
                <p className="parameter">{`${
                  Math.round(data?.current?.wind_speed * 3.6 * 100) / 100
                } km/h`}</p>
              </div>
            </div>
          </div>
          <div className="item-wrapper col-6 col-4 col-12">
            <div className="item h-100">
              <p className="title">Sunrise &amp; Sunset</p>
              <div className="time-of-sun weather-parameter">
                <p className="parameter time-param">
                  <WiSunrise className="sunrise icon-size" />
                  {timeFormat(data?.current?.sunrise)}
                </p>
                <p className="parameter time-param">
                  <WiSunset className="sunset icon-size" />
                  {timeFormat(data?.current?.sunset)}
                </p>
              </div>
            </div>
          </div>
          <div className="item-wrapper col-6 col-4 col-12">
            <div className="item h-100">
              <p className="title">Humidity</p>
              <div className="weather-parameter">
                <WiHumidity className="humid icon-size" />
                <p className="parameter">{data?.current?.humidity} %</p>
              </div>
            </div>
          </div>
          <div className="item-wrapper col-6 col-4 col-12">
            <div className="item h-100">
              <p className="title">Visibility</p>
              <div className="weather-parameter">
                <IoMdSpeedometer className="speed icon-size" />
                <p className="parameter">{`${
                  data?.current?.visibility / 1000
                } km`}</p>
              </div>
            </div>
          </div>
          <div className="item-wrapper col-6 col-4 col-12">
            <div className="item h-100">
              <p className="title">Plessure</p>
              <div className="weather-parameter">
                <FaThermometerEmpty className="thermometer icon-size" />
                <p className="parameter">{data?.current?.pressure} hPa</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .row > * {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }
  .today-contents {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    .item-wrapper {
      padding: 1rem;
      .item {
        background-color: #fff;
        border-radius: 0.3rem;
        padding: 0.5rem;
        .title {
          font-size: 1.25rem;
          color: rgb(0 0 0/26%);
        }
        .weather-parameter {
          text-align: center;
          .icon-size {
            font-size: 50px;
            text-align: center;
            margin-top: 0.25rem;
            margin-bottom: 0.25rem;
          }
          .parameter {
            font-size: 1.75rem;
            color: #6c757d;
            font-weight: 700;
          }
          .time-param {
            font-size: 1.5rem;
          }
          .uv,
          .sunrise,
          .sunset,
          .speed {
            color: #ffc107;
          }
          .wind,
          .humid,
          .thermometer {
            color: rgba(13, 110, 253, 0.7686274509803922);
          }
        }
        .time-of-sun {
          text-align: left;
        }
        svg {
          vertical-align: middle;
        }
      }
    }
  }
`;
export default Today;
