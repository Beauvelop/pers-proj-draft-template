angular.module("myApp", ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('home', {
        controller: 'homeCtrl',
        url: '/home',
        templateUrl: 'views/home/home.html'
      })
      .state('cascade', {
        templateUrl: 'views/cascade/cascade.html',
        controller: 'cascadeCtrl',
        url: '/cascade'
      })
      .state('jayq', {
        templateUrl: 'views/jayq/jayq.html',
        controller: 'jayqCtrl',
        url: '/jayq'
      })
      .state('devTools', {
        templateUrl: 'views/devTools/devTools.html',
        controller: 'devToolsCtrl',
        url: '/devTools'
      })
      .state('perfView', {
        templateUrl: 'views/perfView/perfView.html',
        controller: 'perfViewCtrl',
        url: '/perfView'
      })
      .state('inputs', {
        templateUrl: 'views/inputs/inputs.html',
        controller: 'inputsCtrl',
        url: '/inputs/:id' //accepts a parameter & stores it in 'id'
      })
      // NOTE: THis puts stuff in the url bar and sends that info to the controller

    $urlRouterProvider.otherwise('/home');
  })
