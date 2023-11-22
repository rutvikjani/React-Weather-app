function CityWeatherDetails({ cityName, date, icons, weather }){
    return(
        <>
        <div className="cityWeather">
        <h1> {cityName} </h1>
        <p> {date}</p>
        <img src={icons} alt=""></img>
        <p> {weather}</p>
        </div>
        </>
    )
}

export default CityWeatherDetails;