'use strict';

angular.module('angularDemoApp')
  .controller('ProgramlistCtrl', function ($rootScope, $scope, $http) {
    $scope.loading = false;
    $rootScope.$on("load_program_list", function(ev, url) {
      $scope.loading = true;
      $http.get(url).success(function(data) {
        $scope.programmes = data[0].data.children;

        // debug - TODO remove
        window.programmes = data[0].data.children;
      });
    $scope.load = function(programs) {
      $rootScope.$emit("load_program", programs);
    }      
    });
  });