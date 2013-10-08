'use strict';

angular.module('angularDemoApp')
  .controller('ChannelCtrl', function ($rootScope, $scope, $http) {
    $http.get("/scripts/json/channels.json").
    success(function (data) {
        $scope.channels = data;
    });
    $scope.load = function(feed){
      $rootScope.$emit("load_feed", feed.url);
    }
    window.scope = $scope;
  });
