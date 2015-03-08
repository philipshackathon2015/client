angular.module('HealthSweet.controllers', [])
    .controller('SplashCtrl', function($state, $ionicBackdrop, $timeout) {
        console.log('splash');

        $ionicBackdrop.retain();
            $timeout(function() {
              $ionicBackdrop.release();

              $state.go('login')
            }, 2000);
    })
    .controller('LoginCtrl', function($scope, $state, $ionicLoading, $timeout) {
        console.log('login');

        $scope.login = function() {
            console.log('log in');

            $ionicLoading.show({
                template: 'Logging in...'
            });

            $timeout(function() {
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
    })
    .controller('CareTeamCtrl', function($scope) {
        console.log('care team');

        $scope.contacts = [
            {
                name: 'Mom',
                phoneNumber: '111-222-3333',
                avatar: 'http://www.kuhlerfuneralhome.com/html/Linda_Small/Linda-Small-obit-photo.jpg'
            },
            {
                name: 'Mom',
                phoneNumber: '111-222-3333',
                avatar: 'http://www.kuhlerfuneralhome.com/html/Linda_Small/Linda-Small-obit-photo.jpg'
            },
            {
                name: 'Mom',
                phoneNumber: '111-222-3333',
                avatar: 'http://www.kuhlerfuneralhome.com/html/Linda_Small/Linda-Small-obit-photo.jpg'
            },
            {
                name: 'Mom',
                phoneNumber: '111-222-3333',
                avatar: 'http://www.kuhlerfuneralhome.com/html/Linda_Small/Linda-Small-obit-photo.jpg'
            },
            {
                name: 'Mom',
                phoneNumber: '111-222-3333',
                avatar: 'http://www.kuhlerfuneralhome.com/html/Linda_Small/Linda-Small-obit-photo.jpg'
            }
        ];

        $scope.call = function(contact) {
            console.log(contact);
        };

        $scope.edit = function(contact) {
            console.log(contact);
        };
    })
    .controller('CarePlanCtrl', function($scope) {
        console.log('care plan');
    })
    .controller('SettingsCtrl', function($scope) {
        console.log('settings');
    });