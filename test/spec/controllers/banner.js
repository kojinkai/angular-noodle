'use strict';

describe('Controller: BannerCtrl', function () {

  // load the controller's module
  beforeEach(module('angularDemoApp'));

  var BannerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BannerCtrl = $controller('BannerCtrl', {
      $scope: scope
    });
  }));

  it('should set the page title', function () {
    expect(scope.title).toBeDefined();
  });
});
