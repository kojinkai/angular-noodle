'use strict';

angular.module('angularDemoApp')
  .controller('ProgramlistCtrl', function ($rootScope, $scope, $http) {
    $scope.loading = false;
    $rootScope.$on("load_feed", function(ev, url) {
      console.log("the event data: ", ev, url);
    });
  });
