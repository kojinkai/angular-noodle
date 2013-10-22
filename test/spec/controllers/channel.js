'use strict';

describe('Controller: ChannelCtrl', function () {

  // load the controller's module
  beforeEach(module('angularDemoApp'));

  var ChannelCtrl,
    scope,
    $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $injector) {
    scope = $rootScope.$new();
    ChannelCtrl = $controller('ChannelCtrl', {
      $scope: scope
    });
    
    // Set up the mock http service responses
    $httpBackend = $injector.get('$httpBackend');
    
    // backend definition common for all tests
    $httpBackend.when('GET', '/scripts/json/channels.json').respond([{"name": "What the jeebus...", "url": "/scripts/json/wtf.json", "image": ""}]);
  }));

  it('should return an object that matches the selected channel', function () {
    // expect(scope.isSelected).toBeTruthy();
    $httpBackend.expectGET('/auth.py');
  });  
});
