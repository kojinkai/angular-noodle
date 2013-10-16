'use strict';

angular.module('angularDemoApp')
  .controller('ChannelCtrl', function ($scope, ProgramList) {
    $scope.channels = ProgramList.init("/scripts/json/channels.json");
    $scope.pushLoad = ProgramList.pushLoad;
  });
