angular.module('HealthSweet.controllers')
    .controller('SplashCtrl', function($state, $ionicBackdrop, $timeout) {
        console.log('splash');

        $ionicBackdrop.retain();
            $timeout(function() {
              $ionicBackdrop.release();

              $state.go('login')
            }, 2000);
    });