angular.module('HealthSweet.controllers')
    .controller('HomeCtrl', function($scope) {
        console.log('home');

        $scope.statuses = [
            {
                timestamp: 'March 5, 2015',
                text: 'Movement and Wellness'
            },
            {
                timestamp: 'March 4, 2015',
                text: 'Pain Management and Medications'
            },
            {
                timestamp: 'March 2, 2015',
                text: 'Movement and Wellness'
            },
            {
                timestamp: 'February 27, 2015',
                text: 'Movement and Wellness'
            },
            {
                timestamp: 'February 24, 2015',
                text: 'Pain Management and Medications'
            }
        ];
    });