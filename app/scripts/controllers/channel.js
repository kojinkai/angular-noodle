'use strict';

angular.module('angularDemoApp')
  .controller('ChannelCtrl', function ($scope, ProgramList) {
    // $scope.channels = ProgramList.init("/scripts/json/channels.json");
    // $scope.pushLoad = ProgramList.pushLoad;
    $scope.ProgramList = ProgramList;

    $scope.selectChannel = function(channel) {
        ProgramList.setSelectedChannel(channel);
      };
    $scope.isSelected = function(channel) {
        return channel === ProgramList.selectedChannel;
      };
  });
