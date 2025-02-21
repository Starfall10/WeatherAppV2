import React from "react";
import "./css/Main.css";
import cloudy from "../assets/cloudy.png";

const Main = () => {
  return (
    <div className="main">
      <div className="date_time">
        <p>Mon, 17 Febuary, 2025</p>
        <p>1:34 PM</p>
      </div>
      <div className="weather_main">
        <img src={cloudy} alt="WeatherIcon" />
        <div>
          <p className="temp">16°C</p>
          <p className="location">Tower Hamlets</p>
        </div>
      </div>
      <div className="high_low">
        <p>H: 18°C</p>
        <p>L: 10°C</p>
      </div>
    </div>
  );
};

export default Main;
