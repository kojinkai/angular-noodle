'use strict';

describe('Controller: WtfCtrl', function () {

  // load the controller's module
  beforeEach(module('angularDemoApp'));

  var WtfCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WtfCtrl = $controller('WtfCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
