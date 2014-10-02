'use strict';

describe('Controller: CadclientesCtrl', function () {

  // load the controller's module
  beforeEach(module('crmApp'));

  var CadclientesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CadclientesCtrl = $controller('CadclientesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
