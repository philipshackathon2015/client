angular.module('HealthSweet.controllers')
    .controller('SurveyCtrl', function($scope, $stateParams, $ionicHistory) {
        console.log('survey');
        console.log($stateParams.timestamp);

        $scope.timestamp = $stateParams.timestamp;

        $scope.formData = {};
    });