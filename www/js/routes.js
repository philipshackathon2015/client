angular.module('HealthSweet.routes', [])
    .config(function($stateProvider, $urlRouterProvider) {
        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider
            .state('app', {
                url: '',
                abstract: true,
                templateUrl: "templates/side-menu.html",
                controller: 'SideMenuCtrl'
            })
            // setup an abstract state for the tabs directive
            // .state('tab', {
            //     url: "/tab",
            //     abstract: true,
            //     templateUrl: "templates/tabs.html"
            // })
            // Each tab has its own nav history stack:
            .state('app.home', {
                url: '/home',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/home.html',
                        controller: 'HomeCtrl'
                    }
                }
            });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/home');
    });