angular.module('myApp')
  .controller('inputsCtrl', function($scope, $stateParams) {
    $scope.inputsTest = "this is inputsTest from inputsctrller";
    $scope.paramTest = $stateParams.id;
  });
