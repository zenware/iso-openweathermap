# iso-openweathermap [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> Isomorphic OpenWeatherMap API

## Installation

```sh
$ npm install --save iso-openweathermap
```

## Usage

```js
$(document).ready(() => {

  const config = {
    API_ENDPOINT: 'http://api.openweathermap.org/data/2.5/weather', 
    API_KEY: 'Your API Key',
    UNITS: 'imperial', 
    MODE: 'json', 
    LAT: null, 
    LON: null,
    ACCURACY: 'high', 
    CALLBACK: null, 
    LANGUAGE: 'en',
  };

  let weather = new OpenWeatherMap(config);
  
  setInterval(() => {
    $('.country').text(weather.getCountry())
    $('.city').text(weather.getCity())
    $('.weather').html(weather.getWeatherDescription() + '<img src="' + weather.getWeatherIcon() + '" \/>');
    $('.temp').text(weather.getTemp() + weather.getUnitSymbol())
    $('.pressure').text(weather.getPressure())
    $('.humidity').text(weather.getHumidity())
    $('.windspeed').text(weather.getWindspeed())
  }, 3000);
});
```
## License

MIT © [Jay Looney &lt;jay.m.looney@gmail.com&gt;](http://www.jaylooney.us)


[npm-image]: https://badge.fury.io/js/iso-openweathermap.svg
[npm-url]: https://npmjs.org/package/iso-openweathermap
[travis-image]: https://travis-ci.org/zenware/iso-openweathermap.svg?branch=master
[travis-url]: https://travis-ci.org/zenware/iso-openweathermap
[daviddm-image]: https://david-dm.org/zenware/iso-openweathermap.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/zenware/iso-openweathermap
[coveralls-image]: https://coveralls.io/repos/zenware/iso-openweathermap/badge.svg
[coveralls-url]: https://coveralls.io/r/zenware/iso-openweathermap
