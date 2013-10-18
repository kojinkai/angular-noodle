'use strict';

angular.module('angularDemoApp')
  .controller('ProgramCtrl', function ($scope, ProgramList) {
    $scope.loading = false;
    $scope.programView = ProgramList.programView;
  });
