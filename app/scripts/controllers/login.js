'use strict';

/**
 * @ngdoc function
 * @name crmApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the crmApp
 */
app.controller('LoginCtrl', ['$scope', '$location',
    function ($scope, $location) {

        $scope.falhou = false;
        
        $scope.logar = function () {
            if ($scope.usuario === 'PAULO' && $scope.senha === '123') {
                $location.path('/dashboard');
            } else {
                $scope.falhou = true;
            }

        };
    }]);