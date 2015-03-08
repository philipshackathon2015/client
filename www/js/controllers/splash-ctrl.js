angular.module('HealthSweet.controllers')
    .controller('SplashCtrl', function($state, $timeout) {
        console.log('splash');

        $timeout(function() {
            $state.go('login')
        }, 2000);
    });