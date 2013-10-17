'use strict';

angular.module('angularDemoApp')
  .controller('ProgramlistCtrl', function ($scope, ProgramList) {
    $scope.ProgramList = ProgramList;
  });