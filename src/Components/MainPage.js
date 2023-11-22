import React, { useEffect, useState } from "react";
import "./MainPage.css";
import CityWeatherDetails from "./MainPageComponents/cityWeatherDetails";
import CityTemperature from "./MainPageComponents/cityTemperature";
import DetailContent from "./MainPageComponents/detailContent";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Navigation from "./NavigationComponent/Navigation";

function MainPage() {
  const initialState = "India";
  const [search, setSearch] = useState(initialState);
  const [cityData, setCityData] = useState();

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://api.weatherapi.com/v1/forecast.json?key=0751adc9323f4f23be0191439232506&q=" +`${search}`);
      const data = response.data;
      setCityData(data);
    } catch (error) {
      console.log(error);
    }
  };



  useEffect(() => {
    fetchData();
  }, []);

  let handleChange = (e) => {
    setSearch(e.target.value);
};

let handleClick = () => {
    fetchData()
    if (search == "") {
      setSearch(initialState);
    }
}

  

  if (cityData) {
    return (
      <>
      <Navigation thirdButton={"Sign-out"} />
        <div className="mainContainer">
            <div className="searchBarContainer">
            <input
            type="text"
            placeholder="Enter Country"
            onChange={handleChange}
            ></input> 
             <button className="searchButton" onClick={handleClick}>{<FontAwesomeIcon icon={faSearch} />}</button>
            </div>
         
          <div className="contentContainer">
            <div className="cityContainer">
              <CityWeatherDetails
                cityName={cityData.location.name}
                date={cityData.location.localtime}
                icons={cityData.current.condition.icon}
                weather={cityData.current.condition.text}
              />
              <CityTemperature
                temperature={cityData.current.temp_c+"°c"}
                minMaxTemprature={
                  cityData.forecast.forecastday[0].day.maxtemp_c +
                  "/" +
                  cityData.forecast.forecastday[0].day.mintemp_c +
                  " °c"
                }
              />
            </div>
            <div className="detailWeatherContianer">
              <DetailContent
                heading={"Feels Like"}
                value={cityData.current.feelslike_c + " °c"}
              />
              <DetailContent
                heading={"Humidity"}
                value={cityData.current.humidity + " %"}
              />
              <DetailContent
                heading={"Wind"}
                value={cityData.current.wind_kph + " km/h"}
              />
              <DetailContent
                heading={"Percipitation(mm)"}
                value={cityData.current.precip_mm + " mm"}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default MainPage;
