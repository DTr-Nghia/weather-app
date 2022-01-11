import styled from "styled-components";
import Search from "./Search";
import { useSearchContext } from "../context/SearchContext";
import {useWeatherContext} from "../context/WeatherContext";
import { timeFormat } from "../utils/TimeFormat";
const Sidebar = () => {
  const {cityName,error,prevName} = useSearchContext()


  const  {data} = useWeatherContext()
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const icons = ["Clear", "Clouds", "Drizzle", "Rain", "Snow", "Thunderstorm"]
  

  const dateFormat = (strDate) => {
    const date = new Date(strDate * 1000)
    return days[date.getDay()]
  }
  const filterImg = icons.includes(data?.current?.weather[0]?.main)
  ? data?.current?.weather[0]?.main
  : 'atmosphere'
  return (
    <Wrapper className='col-3 col-12'>
      <Search />
      <img src={require(`../asset/${filterImg}.png`)} alt="icon" className="img-fluid" />
      <div className="city-name">{error !== "" ? prevName : cityName}</div>
      <div className="temperature">{data?.current?.temp}°C</div>
      <div className="date">{dateFormat(data?.current?.dt)}, {timeFormat(data?.current?.dt)}</div>
      <div className="climate">
        {data?.current?.weather[0].description} <br />{data?.current?.weather[0]?.main} {`${data?.current?.clouds}%`}
      </div>
      <div className="presentation position-relative">
        <div className="position-absolute">
          <div className="city-name">{error !== "" ? prevName : cityName}</div>
        </div>
        <img
          src="https://us.123rf.com/450wm/macrovector/macrovector1805/macrovector180500152/100615959-weather-forecast-web-page-with-heavy-rain-on-dark-cloudy-day-with-people-under-umbrellas-vector-illu.jpg?ver=6"
          alt="pre-img"
          className="img-fluid"
        />
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  flex: 0 0 auto;
  background-color: #fff;
  padding: 1.5rem;
  .img-fluid {
    max-width: 100%;
    height: auto;
  }
  .city-name {
    font-weight: 700;
    font-size: 2rem;
    line-height: 1.25;
    text-transform: capitalize;
  }
  .temperature {
    font-weight: 700;
    font-size: 2.5rem;
  }
  .date {
    font-size: 1.25rem;
    line-height: 2;
  }
  .climate {
    line-height: 1.5;
    text-transform: capitalize;
    margin-bottom: 1rem;
    color: #6c757d;
    font-size: 1rem;
  }
  .presentation {
    display: flex;
    justify-content: center;
    align-items: center;
    .city-name {
      color: #fff;
      font-size: 1.75rem;
    }
  }
`;
export default Sidebar;
