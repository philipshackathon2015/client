angular.module('HealthSweet.routes', [])
    .config(function($stateProvider, $urlRouterProvider) {
        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        $stateProvider
            // top-level routes
            .state('splash', {
                url: '/splash',
                templateUrl: 'templates/splash.html',
                controller: 'SplashCtrl'
            })
            .state('login', {
                url: '/login',
                templateUrl: 'templates/login.html',
                controller: 'LoginCtrl'
            })
            // app sidebar menu and routes
            .state('app', {
                abstract: true,
                templateUrl: 'templates/side-menu.html',
                controller: 'SideMenuCtrl'
            })
            .state('app.home', {
                url: '/home',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/home.html',
                        controller: 'HomeCtrl'
                    }
                }
            })
            .state('app.careTeam', {
                url: '/care-team',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/care-team.html',
                        controller: 'CareTeamCtrl'
                    }
                }
            })
            .state('app.carePlan', {
                url: '/care-plan',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/care-plan.html',
                        controller: 'CarePlanCtrl'
                    }
                }
            })
            .state('app.settings', {
                url: '/settings',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/settings.html',
                        controller: 'SettingsCtrl'
                    }
                }
            })
            // app routes that don't inherit side menu
            .state('survey', {
                url: '/survey/:timestamp',
                templateUrl: 'templates/survey.html',
                controller: 'SurveyCtrl'
            });

        $urlRouterProvider.otherwise('/splash');
    });