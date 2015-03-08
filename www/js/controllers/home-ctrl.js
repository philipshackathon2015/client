angular.module('HealthSweet.controllers')
    .controller('HomeCtrl', function($scope) {
        console.log('home');

        $scope.statuses = [
            {
                timestamp: 'March 5, 2015',
                text: 'Some text about the mood status report that was completed'
            },
            {
                timestamp: 'March 5, 2015',
                text: 'Some text about the mood status report that was completed'
            },
            {
                timestamp: 'March 5, 2015',
                text: 'Some text about the mood status report that was completed'
            },
            {
                timestamp: 'March 5, 2015',
                text: 'Some text about the mood status report that was completed'
            },
            {
                timestamp: 'March 5, 2015',
                text: 'Some text about the mood status report that was completed'
            }
        ];

        $scope.generateTimestamp = function() {
            return (new Date).getTime();
        };
    });