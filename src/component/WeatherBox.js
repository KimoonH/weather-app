import React from 'react'

const WeatherBox = ({ weather }) => {
    // 온도 정수로 변환 (소수점 제거, 반올림)
    const celsius = Math.round(weather?.main.temp);
    const fahrenheit = Math.round(weather?.main.temp * 1.8 + 32);

    return (
        <div className="weather-box">
            <div>{weather?.name}</div>
            <h2>{celsius}℃ / {fahrenheit}℉</h2>
            <h3>{weather?.weather[0].description}</h3>
        </div>
    );
};

export default WeatherBox