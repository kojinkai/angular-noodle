'use strict';

angular.module('angularDemoApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/programmes.html',
        controller: 'ProgramlistCtrl'
      })
      .when('/wtf', {
        templateUrl: 'views/wtf.html',
        controller: 'WtfCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
