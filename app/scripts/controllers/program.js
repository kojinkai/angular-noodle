'use strict';

angular.module('angularDemoApp')
  .controller('ProgramCtrl', function ($scope, ProgramList) {
    $scope.loading = false;

    $scope.title = 'title';
    $scope.score = 'score';
    $scope.url = 'url';

  });
