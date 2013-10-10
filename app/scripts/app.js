'use strict';

angular.module('angularDemoApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/programmes.html',
        controller: 'ProgramCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
