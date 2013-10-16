'use strict';

angular.module('angularDemoApp')
  .controller('ProgramlistCtrl', function ($scope, ProgramList) {
    $scope.loading = false;
    $scope.programList = ProgramList.pullLoad();
    console.log("our URL: ", $scope.programList);

    // $rootScope.$on("load_program_list", function(ev, url) {
    //   $scope.loading = true;
    //   $http.get(url).success(function(data) {
    //     $scope.programmes = data[0].data.children;
    //   });
    // $scope.load = function(programs) {
    //   $rootScope.$emit("load_program", programs);
    // }      
    });