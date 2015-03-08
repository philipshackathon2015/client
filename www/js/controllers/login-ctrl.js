angular.module('HealthSweet.controllers')
    .controller('LoginCtrl', function($scope, $state, $ionicLoading, $timeout) {
        console.log('login');

        $scope.login = function() {
            console.log('log in');

            $ionicLoading.show({
                template: 'Logging in...'
            });

            $timeout(function() {
                $ionicLoading.hide();

                $state.go('app.home');
            }, 600);
        };
    });