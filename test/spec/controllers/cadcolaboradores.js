'use strict';

describe('Controller: CadcolaboradoresCtrl', function () {

  // load the controller's module
  beforeEach(module('crmApp'));

  var CadcolaboradoresCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CadcolaboradoresCtrl = $controller('CadcolaboradoresCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
