'use strict';

angular.module('angularDemoApp')
  .controller('ProgramlistCtrl', function ($scope, ProgramList) {
    $scope.ProgramList = ProgramList;
    
    $scope.loadSelectedPrograms = function(data) {
        ProgramList.setData(data);
      };
  });