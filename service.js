angular.module('myApp')
  .service('weatherService', ['$http', function($http) {
    this.getWeather = function() {
      var apiKey = "ee148a39251d4314c86b16c7b0c3034d";
      return $http({
        method: 'GET',
        url: "http://api.openweathermap.org/data/2.5/weather?lat=40.2181&lon=-111.6133&units=imperial&appid=" +
          apiKey
      });

      promise.then(function(response) {
        if (response.status === 200) {
          return response.data.data;
          // NOTE: 'data.data' is common:
          //1st is angular's...2nd is the server's
        }
        return "error!";
      })
      return promise;
    };



  }]);



/*
NOTE 3) -inject $http

NOTE 4) create a function on this

NOTE 5) create a promise invoking $http.get();
XXX that get is giving you back a PROMISE.

NOTE 6) On that promise, I put a .then()
XXX into .then() put a callback that receives results
.
NOTE 7) finally we return the promise
*/
