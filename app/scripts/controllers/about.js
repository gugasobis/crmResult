'use strict';

/**
 * @ngdoc function
 * @name crmApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the crmApp
 */
angular.module('crmApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
