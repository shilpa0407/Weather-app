import React, { useEffect, useState } from "react";
import "../css/Weather.css";

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
        <input
          type="search"
          className="searchIn"
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
        {city && (
          <div className="info">
            <p className="location">{city.name}</p>
            {city.main && (
              <div>
                <p className="temp">{city.main.temp} `Cel</p>
                <p className="temp-min-max">
                  Min: {city.main.temp_min} `Cel | Max: {city.main.temp_max} `Cel
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;
