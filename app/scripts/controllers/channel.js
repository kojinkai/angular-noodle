'use strict';

angular.module('angularDemoApp')
  .controller('ChannelCtrl', function ($rootScope, $scope, $http) {
    $http.get("/scripts/json/channels.json").
    success(function (data) {
        $scope.channels = data;
        window.channels = data;
    });
    $scope.load = function(channels){
      $rootScope.$emit("load_program_list", channels.url);
    }
  });
