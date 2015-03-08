angular.module('HealthSweet.controllers')
    .controller('SurveyCtrl', function($scope, $state, $stateParams, $timeout, $ionicLoading) {
        console.log('survey');
        console.log($stateParams.timestamp);

        $scope.timestamp = $stateParams.timestamp;

        $scope.formData = {
            userId: 123,
            timestamp: $stateParams.timestamp
        };

        $scope.processForm = function() {
            console.log('PROCESS FORM');

            $ionicLoading.show({
                template: 'Sending survey...'
            });

            $timeout(function() {
                $ionicLoading.hide();

                $state.go('app.home');
            }, 600);
        };
    });