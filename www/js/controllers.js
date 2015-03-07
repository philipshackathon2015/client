angular.module('HealthSweet.controllers', [])
    .controller('LoginCtrl', function($scope, $state, $ionicLoading) {
        console.log('login');

        $scope.login = function() {
            console.log('log in');

            $ionicLoading.show({
                template: 'Logging in...'
            });

            setTimeout(function() {
                $ionicLoading.hide();

                $state.go('app.home')
            }, 600);
        };
    })
    .controller('SideMenuCtrl', function($scope) {
        console.log('menu');
    })
    .controller('HomeCtrl', function($scope) {
        console.log('home');
    });