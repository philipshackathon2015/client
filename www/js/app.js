// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'HealthSweet' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'HealthSweet.services' is found in services.js
// 'HealthSweet.controllers' is found in controllers.js
angular.module('HealthSweet', [
    'ionic',
    'HealthSweet.routes',
    'HealthSweet.controllers',
    'HealthSweet.services'
]).run(function($rootScope, $ionicPlatform, $ionicPopup) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }

        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }

        var pusher = new Pusher('178160f97893ca18c3d2');
        var channel = pusher.subscribe('HealthSweet');

        channel.bind('newSurvey', function(data) {
            console.log('new pusher message: ', data);

            if (!$rootScope.newSurvey) {
                $rootScope.newSurvey = true;
                $rootScope.surveyTimestamp = (new Date).getTime();

                var alertPopup = $ionicPopup.alert({
                        title: 'New survey!',
                        template: 'Tell us a little about your recent habits.'
                    });

                alertPopup.then(function(res) {
                    console.log('New survey popup closed');
                });
            }
        });

        $rootScope.newSurvey = false;
    });
});