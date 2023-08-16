// 天気データを取得する関数
function getWeatherData() {
    const weatherDiv = document.getElementById('weather');
    const apiKey = 'c4d709cb0421492fb4815231231605';
    const city = 'Tokyo';
    const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=1`;
    
    // 天気の画像と日本語表記のマッピング
  const weatherImages = {
    'Clear': 'https://th.bing.com/th/id/OIP.qPD0qFW26JEMhmfUeiL8HQAAAA?w=183&h=183&c=7&r=0&o=5&dpr=1.5&pid=1.7',
    'Partly cloudy': 'https://i0.ui-123.com/data/09pn/1909/a76697.png',
    'Cloudy': 'https://th.bing.com/th/id/OIP.IoCNG-cAFkNU1xeSipZ9KQHaHa?w=166&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7',
    'Overcast': 'https://th.bing.com/th/id/R.06c4455deb3962cc93bd0465ee9525d1?rik=etSF2pk%2fYD2M3g&riu=http%3a%2f%2fwww.silhouette-ac.com%2fsozai%2fm%2f120%2f05%2f120053m.jpg&ehk=eAV1da7CMcoWpEFxrZmoLr5BPdKdqjpHSYJZOI2Z4ao%3d&risl=&pid=ImgRaw&r=0',
    'Rain': 'https://th.bing.com/th/id/OIP._e8pmUEDuGasL4795XK0swAAAA?pid=ImgDet&rs=1',
    'Showers': 'https://chicodeza.com/wordpress/wp-content/uploads/tennki-illust20.png',
    'Thunderstorm': 'https://sakutto-sozai.com/wp-content/uploads/2021/08/thunderstorm_001_thumb.jpg',
    'Snow': 'https://illust8.com/wp-content/uploads/2018/08/weather_snow_yukidaruma_illsut_1089.png',
    'Mist': 'https://3.bp.blogspot.com/-cxYF1nh7jgQ/WOdEAeCvVEI/AAAAAAABDng/JSPTXndnhJEL5qh67Zq5N9Tz12X6svdMQCLcB/s400/yama_kiri.png',
  };  
  
  const weatherName = {
    'Clear': '快晴',
    'Partly cloudy': '晴れ',
    'Cloudy': 'くもり',
    'Overcast': '曇り',
    'Rain': '雨',
    'Showers': 'にわか雨',
    'Thunderstorm': '雷雨',
    'Snow': '雪',
    'Mist': '霧'
  }


    
  fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const currentWeather = data.current.condition.text;
        const currentTemp = data.current.temp_c;
        const forecast = data.forecast.forecastday[0];
  
        const minTemp = forecast.day.mintemp_c;
        const maxTemp = forecast.day.maxtemp_c;

        let weatherIconUrl = weatherImages[currentWeather];
        let weatherToday = weatherName[currentWeather];
        


  
        weatherDiv.innerHTML = `
          <h2> ${weatherToday}</h2>
          <img src="${weatherIconUrl}" alt="Weather Icon" class= "weather-icon">
          <div class="temp">
            <p>気温: <span class = "tempfont">${currentTemp}℃</span></p>
            <p>最低気温: <span class = "templow">${minTemp}℃</span></p>
            <p>最高気温: <span class = "temphigh">${maxTemp}℃</span></p>
          </div>
        `;
      })
      .catch(error => {
        console.error('天気データの取得エラー:', error);
        weatherDiv.innerText = '天気データの取得エラー';
      });
  }
  
// 本日の天気データを取得して表示
getWeatherData();

  
  
  