'use strict';

describe('Controller: ProgramlistCtrl', function () {

  // load the controller's module
  beforeEach(module('angularDemoApp'));

  var ProgramlistCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProgramlistCtrl = $controller('ProgramlistCtrl', {
      $scope: scope
    });
  }));

  // it('should attach a list of awesomeThings to the scope', function () {
  //   expect(scope.awesomeThings.length).toBe(3);
  // });
});
