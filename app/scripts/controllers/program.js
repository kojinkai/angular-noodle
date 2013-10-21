'use strict';

angular.module('angularDemoApp')
  .controller('ProgramCtrl', function ($scope, ProgramList) {
    $scope.loading = false;
    $scope.ProgramList = ProgramList;
  });
