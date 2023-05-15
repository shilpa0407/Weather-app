import React, { useEffect, useState } from "react";
import "../css/Weather.css";
import map from  "../Images/map.png"
import wave1 from "../Images/wave1.png"
import wave2 from "../Images/wave2.png"

const Weather = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Bangalore");

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=209e141b9b55237d34d6d5fb7a67b49f`;
      const response = await fetch(url);
      const resJson = await response.json();
      setCity(resJson);
    };
    fetchApi();
  }, [search]);

  return (
    <div className="body">
      <div className="box-1">
        <input type="search" placeholder="Search with city names" 
          className="searchIn"
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
        {city && (
          <div className="info"> 
          <div className="icon"> 
          <div className="waves"><img src={map} alt="waves"/></div>
            <div><p className="location">{city.name}</p></div>
            </div>
            {city.main && (
              <div>
                <p className="temp">{city.main.temp} `Cel</p>
                <p className="temp-min-max">
                  Min: {city.main.temp_min} `Cel | Max: {city.main.temp_max} `Cel
                </p>
              </div>
            )}
    
             <div className="image-container">
             <div className="water-effect">
      <img src={wave1} alt="Background" className="background-image" />
      <img src={wave2} alt="Overlay" className="overlay-image" />
      </div>
    </div>
    </div>
      
        )}
        
      </div>
    </div>
  );
};

export default Weather;
