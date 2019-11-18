"use strict";
/*

- Sign up for openweathermap.org and generate an API key.
- User either $.ajax or $.get to pull weather current data .
  for Washington DC (hint: http://api.openweathermap.org/data/2.5/weather?q=...).
- Print the temperature in console.
- Bonus 1: add a form prompting user for the city and state.
- Bonus 2: convert answer from kelvin to fahrenheit.

*/

$("#weatherForm").submit(function(e) {
  e.preventDefault();
  var weatherUrl = "https://api.openweathermap.org/data/2.5/weather";
  var apiKey = "2c12ca68c8758f953344b6f725438446";
  function toFahrenheit(kelvin) {
    return (kelvin * 9) / 5 - 459.67;
  }
  function toCelsius(kelvin) {
    return kelvin - 273.15;
  }
  return $.ajax({
    url: weatherUrl,
    type: "GET",
    data: {
      q: $("input").val(),
      appid: apiKey
    },
    dataType: "json",
    success: function(data) {
      console.log(
        `Temprature in ${$("input").val()}: ` +
          data.main.temp +
          " kelvin = " +
          toFahrenheit(data.main.temp).toFixed(1) +
          " fahrenheit = " +
          toCelsius(data.main.temp).toFixed(1) +
          " celsius"
      );
      $("#city").val("");
    },
    error: function(request, status, error) {
      console.log("error: " + request.responseText);
      $("#city").val("");
    }
  });
});
