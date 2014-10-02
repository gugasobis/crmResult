'use strict';

describe('Controller: CadcontratosCtrl', function () {

  // load the controller's module
  beforeEach(module('crmApp'));

  var CadcontratosCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CadcontratosCtrl = $controller('CadcontratosCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
