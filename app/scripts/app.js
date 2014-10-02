'use strict';

/**
 * @ngdoc overview
 * @name crmApp
 * @description
 * # crmApp
 *
 * Main module of the application.
 */
var app = angular
  .module('crmApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/dashboard', {
        templateUrl: 'views/dashboard.html',
        controller: 'DashboardCtrl'
      })
      .when('/cadClientes', {
        templateUrl: 'views/cadclientes.html',
        controller: 'CadclientesCtrl'
      })
      .when('/cadcolaboradores', {
        templateUrl: 'views/cadcolaboradores.html',
        controller: 'CadcolaboradoresCtrl'
      })
      .when('/cadcontratos', {
        templateUrl: 'views/cadcontratos.html',
        controller: 'CadcontratosCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
