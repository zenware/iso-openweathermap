"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var OpenWeatherMap = (function () {

  /*
   * The config object passed to the constructor should contain all of the
   * relevant information that will be used when accessing the API aside
   * from manually querying the data...
   *
   * A custom format for the configuration should be specified that then
   * gets mapped to what is sent to the openweathermap API endpoint.
   */

  function OpenWeatherMap(config) {
    _classCallCheck(this, OpenWeatherMap);

    this.config = config;
    this.API_ENDPOINT = 'api.openweathermap.org/data/2.5/weather';
    this.apiResult = null;
    this.getLocation();
  }

  _createClass(OpenWeatherMap, [{
    key: "getLocation",
    value: function getLocation() {
      var _this = this;

      if (navigator.geolocation) {
        console.log("Browser supports geolocation");
        navigator.geolocation.getCurrentPosition(function (position) {
          console.log("Got position");
          console.log(position);
          _this.lat = position.coords.latitude;
          _this.lon = position.coords.longitude;
        });
      } else {
        console.log("Geolocation is not supported by this browser.");
      }
    }
  }, {
    key: "queryAPI",
    value: function queryAPI(string) {
      var _this2 = this;

      if (string === undefined) {
        $.getJSON(this.API_ENDPOINT, {
          lat: this.lat,
          lon: this.lon,
          APPID: this.API_KEY,
          units: 'metric'
        }, function (data) {
          console.log("Automatically Created Query");
          console.log(data);
          _this2.apiResult = data;
        });
      } else {
        $.getJSON(string, {
          units: 'metric'
        }, function (data) {
          console.log("Manually Specified Query");
          console.log(data);
          _this2.apiResult = data;
        });
      }
    }
  }, {
    key: "callbackComplete",
    value: function callbackComplete() {
      if (this.apiResult === null) {
        return false;
      } else {
        return true;
      }
    }
  }, {
    key: "getApiResult",
    value: function getApiResult() {
      return this.apiResult;
    }
  }, {
    key: "getCity",
    value: function getCity() {
      if (this.callbackComplete()) {
        console.log("City Name: " + this.apiResult.name);
        return this.apiResult.name;
      } else {
        console.log("Weather API Callback not yet complete.");
      }
    }
  }, {
    key: "getCountry",
    value: function getCountry() {
      if (this.callbackComplete()) {
        console.log("Country: " + this.apiResult.sys.country);
        return this.apiResult.sys.country;
      } else {
        console.log("Weather API Callback not yet complete.");
      }
    }
  }, {
    key: "getWindspeed",
    value: function getWindspeed() {
      if (this.callbackComplete()) {
        console.log("Windspeed: " + this.apiResult.wind.speed);
        return this.apiResult.wind.speed;
      } else {
        console.log("Weather API Callback not yet complete.");
      }
    }
  }, {
    key: "getWeatherDescription",
    value: function getWeatherDescription() {
      if (this.callbackComplete()) {
        console.log("Weather: " + this.apiResult.weather[0].description);
        return this.apiResult.weather[0].description;
      } else {
        console.log("Weather API Callback not yet complete.");
      }
    }
  }, {
    key: "getWeatherIcon",
    value: function getWeatherIcon() {
      if (this.callbackComplete()) {
        console.log("Weather Icon ID: " + this.apiResult.weather[0].icon);
        return 'http://openweathermap.org/img/w/' + this.apiResult.weather[0].icon + '.png';
      } else {
        console.log("Weather API Callback not yet complete.");
      }
    }
  }, {
    key: "getSunrise",
    value: function getSunrise() {
      if (this.callbackComplete()) {
        console.log("Sunrise: " + this.apiResult.sys.sunrise);
        return new Date(this.apiResult.sys.sunrise);
      } else {
        console.log("Weather API Callback not yet complete.");
      }
    }
  }, {
    key: "getSunset",
    value: function getSunset() {
      if (this.callbackComplete()) {
        console.log("Sunrise: " + this.apiResult.sys.sunset);
        return new Date(this.apiResult.sys.sunset);
      } else {
        console.log("Weather API Callback not yet complete.");
      }
    }
  }, {
    key: "getTemp",
    value: function getTemp() {
      if (this.callbackComplete()) {
        console.log("Temp: " + this.apiResult.main.temp);
        return this.apiResult.main.temp;
      } else {
        console.log("Weather API Callback not yet complete.");
      }
    }
  }, {
    key: "getPressure",
    value: function getPressure() {
      if (this.callbackComplete()) {
        console.log("Pressure: " + this.apiResult.main.pressure);
        return this.apiResult.main.pressure;
      } else {
        console.log("Weather API Callback not yet complete.");
      }
    }
  }, {
    key: "getHumidity",
    value: function getHumidity() {
      if (this.callbackComplete()) {
        console.log("Humidity: " + this.apiResult.main.humidity);
        return this.apiResult.main.humidity;
      } else {
        console.log("Weather API Callback not yet complete.");
      }
    }
  }]);

  return OpenWeatherMap;
})();

exports["default"] = {};
module.exports = exports["default"];