'use strict';

angular.module('angularDemoApp')
  .controller('ChannelCtrl', function ($scope, ProgramList) {
    $scope.ProgramList = ProgramList;

    $scope.selectChannel = function(channel) {
        ProgramList.setSelectedChannel(channel);
      };
    $scope.isSelected = function(channel) {
        return channel === ProgramList.selectedChannel;
      };
  });
