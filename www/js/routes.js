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
            })
            // nested states 
            // each of these sections will have their own view
            // url will be nested (/survey/2)
            .state('survey.1', {
                url: '/1',
                templateUrl: 'templates/survey-1.html',
            })
            .state('survey.2', {
                url: '/2',
                templateUrl: 'templates/survey-2.html',
            })
            .state('survey.3', {
                url: '/3',
                templateUrl: 'templates/survey-3.html',
            });

        $urlRouterProvider.otherwise('/splash');
    });