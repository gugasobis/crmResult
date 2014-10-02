'use strict';

/**
 * @ngdoc function
 * @name crmApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the crmApp
 */
angular.module('crmApp')
  .controller('DashboardCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
