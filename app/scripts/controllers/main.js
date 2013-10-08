'use strict';

angular.module('angularDemoApp')
  .controller('ChannelCtrl', function ($scope, $http) {
    $http.get("/scripts/json/channels.json").
    success(function (data) {
        $scope.channels = data;
    });
  });
