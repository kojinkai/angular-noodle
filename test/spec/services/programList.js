'use strict';

describe('Service: programList', function () {

  // load the service's module
  beforeEach(module('angularDemoApp'));

  // instantiate service
  var programList;
  beforeEach(inject(function (_programList_) {
    programList = _programList_;
  }));

  it('should do something', function () {
    expect(!!programList).toBe(true);
  });

});
