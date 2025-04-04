import { useEffect, useState } from "react";
import './App.css';
import WeatherBox from "./component/WeatherBox.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherButton from "./component/WeatherButton.js";

// 1. 현재 위치 기반의 날씨가 보인다.
// 2. 날씨 정보 섭씨, 화씨, 날씨 상태 정보가 들어간다.
// 3. 5개의 버튼이 있다(현재 위치, 다른 도시들)
// 4. 도시별 날씨 정보가 나온다.
// 5. 현재 위치 버튼을 누르면 현재 위치 기반의 날씨가 보인다.
// 6. 데이터를 들고오는 동안 로딩 스피너가 돈다.
function App() {
  const [weather, setWeather] = useState(null);
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherCurrentLocation(lat, lon)
    });
  };

  const getWeatherCurrentLocation = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=726d97ec75de043571f7cdbe861a3956&units=metric`;
    let response = await fetch(url);
    let data = await response.json();

    setWeather(data);
  }
  useEffect(() => {
    getCurrentLocation();
  }, [])
  return (
    <div>
      <div className="container">
        <WeatherBox weather={weather} />
        <WeatherButton />
      </div>
    </div>
  );
}

export default App;
