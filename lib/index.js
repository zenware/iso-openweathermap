class OpenWeatherMap {

  /*
   * The config object passed to the constructor should contain all of the
   * relevant information that will be used when accessing the API aside
   * from manually querying the data...
   *
   * A custom format for the configuration should be specified that then
   * gets mapped to what is sent to the openweathermap API endpoint.
   */
  constructor(config) {
    this.config = config;
    this.API_ENDPOINT = 'api.openweathermap.org/data/2.5/weather';
    this.apiResult = null;
    this.getLocation();
  }

  getLocation() {
    if (navigator.geolocation) {
      console.log("Browser supports geolocation");
      navigator.geolocation.getCurrentPosition(position => {
        console.log("Got position");
        console.log(position);
        this.lat = position.coords.latitude;
        this.lon = position.coords.longitude;
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }

  queryAPI(string) {
    if (string === undefined) {
      $.getJSON(this.API_ENDPOINT, {
        lat: this.lat,
        lon: this.lon,
        APPID: this.API_KEY,
        units: 'metric',
      }, data => {
        console.log("Automatically Created Query");
        console.log(data);
        this.apiResult = data;
      });
    } else {
      $.getJSON(string, {
        units: 'metric',
      },data => {
        console.log("Manually Specified Query");
        console.log(data);
        this.apiResult = data;
      });
    }
  }

  callbackComplete() {
    if (this.apiResult === null) {
      return false;
    } else {
      return true;
    }
  }

  getApiResult() {
    return this.apiResult;
  }

  getCity() {
    if (this.callbackComplete()) {
      console.log("City Name: " + this.apiResult.name);
      return this.apiResult.name;
    } else {
      console.log("Weather API Callback not yet complete.");
    }
  }

  getCountry() {
    if (this.callbackComplete()) {
      console.log("Country: " + this.apiResult.sys.country);
      return this.apiResult.sys.country;
    } else {
      console.log("Weather API Callback not yet complete.");
    }
  }

  getWindspeed() {
    if (this.callbackComplete()) {
      console.log("Windspeed: " + this.apiResult.wind.speed);
      return this.apiResult.wind.speed;
    } else {
      console.log("Weather API Callback not yet complete.");
    }
  }

  getWeatherDescription() {
    if (this.callbackComplete()) {
      console.log("Weather: " + this.apiResult.weather[0].description);
      return this.apiResult.weather[0].description;
    } else {
      console.log("Weather API Callback not yet complete.");
    }
  }

  getWeatherIcon() {
    if (this.callbackComplete()) {
      console.log("Weather Icon ID: " + this.apiResult.weather[0].icon);
      return 'http://openweathermap.org/img/w/' + this.apiResult.weather[0].icon + '.png';
    } else {
      console.log("Weather API Callback not yet complete.");
    }
  }

  getSunrise() {
    if (this.callbackComplete()) {
      console.log("Sunrise: " + this.apiResult.sys.sunrise);
      return new Date(this.apiResult.sys.sunrise);
    } else {
      console.log("Weather API Callback not yet complete.");
    }
  }

  getSunset() {
    if (this.callbackComplete()) {
      console.log("Sunrise: " + this.apiResult.sys.sunset);
      return new Date(this.apiResult.sys.sunset);
    } else {
      console.log("Weather API Callback not yet complete.");
    }
  }

  getTemp() {
    if (this.callbackComplete()) {
      console.log("Temp: " + this.apiResult.main.temp);
      return this.apiResult.main.temp;
    } else {
      console.log("Weather API Callback not yet complete.");
    }
  }

  getPressure() {
    if (this.callbackComplete()) {
      console.log("Pressure: " + this.apiResult.main.pressure);
      return this.apiResult.main.pressure;
    } else {
      console.log("Weather API Callback not yet complete.");
    }
  }

  getHumidity() {
    if (this.callbackComplete()) {
      console.log("Humidity: " + this.apiResult.main.humidity);
      return this.apiResult.main.humidity;
    } else {
      console.log("Weather API Callback not yet complete.");
    }
  }
}

export default {};
