angular.module('HealthSweet.controllers')
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
    });