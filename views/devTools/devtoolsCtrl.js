angular.module('myApp')
  .controller("devToolsCtrl", function($scope, weatherService) {
    $scope.devToolsTest = "this is devToolsTest from devToolsctrller";

    $scope.getWeather = function() {
      var promise = weatherService.getWeather();
      promise.then(function(weather) {
        // NOTE: people --is the return 'data.data' from the promise.
        $scope.climate = weather.data;
        // console.table($scope.climate);
        console.table(weather.data);
        console.table($scope.climate.weather);
      })
    }
    $scope.getWeather();
  })
