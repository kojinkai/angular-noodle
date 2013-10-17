'use strict';

angular.module('angularDemoApp')
  .controller('ProgramCtrl', function ($rootScope, $scope) {
    $scope.loading = false;
    $rootScope.$on('load_program', function(ev, data) {
      $scope.title = data.title;
      $scope.score = data.score;
      $scope.url = data.url;
      window.programData = data;
    });
  });
