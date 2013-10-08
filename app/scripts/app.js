'use strict';

angular.module('angularDemoApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'ChannelCtrl'
      })
      .when('/wtf', {
        templateUrl: 'views/wtf.html',
        controller: 'WtfCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
