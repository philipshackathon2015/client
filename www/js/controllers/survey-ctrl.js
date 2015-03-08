// TODO: need to clear form data after submission?

angular.module('HealthSweet.controllers')
    .controller('SurveyCtrl', function($scope, $state, $http, $stateParams, $timeout, $ionicLoading) {
        console.log('survey');
        console.log($stateParams.timestamp);

        $scope.timestamp = $stateParams.timestamp;

        $scope.formData = {
            userId: 'Patient/a103',
            timestamp: $stateParams.timestamp
        };

        $scope.processForm = function() {
            var formJson = JSON.stringify($scope.formData);

            console.log('PROCESS FORM');

            console.log(formJson);

            $ionicLoading.show({
                template: 'Sending survey...'
            });

            $http.post('https://api.mongolab.com/api/1/databases/healthsweet/collections/mood-response?apiKey=50f3be0fe4b09b3cd11ebcd1', formJson)
                .success(function(data, status, headers, config) {
                    // this callback will be called asynchronously
                    // when the response is available
                    $ionicLoading.hide();

                    $state.go('app.home');
                })
                .error(function(data, status, headers, config) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                });
        };
    });