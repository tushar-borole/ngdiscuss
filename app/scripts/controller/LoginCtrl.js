/*Author: Tushar Borole
Discription:Login page controller
Copyright:Karma Worldwide Inc. 2014*/




app.controller('LoginCtrl', ['$scope', '$http', 'dataFactory', 'ipCookie', 'notify', '$translate', 'ngFabForm', '$state', 'APP_CONSTANTVALUE', '$timeout',
function ($scope, $http, dataFactory, ipCookie, notify, $translate, ngFabForm, $state, APP_CONSTANTVALUE, $timeout) {


        /*Initialization of variable start*/
        $scope.login = {};
        $scope.customFormOptions = angular.copy(ngFabForm.config);

        /*Function to login the user
         * return authentication tocken which is saved in localstorage*/
        $scope.loginUser = function () {

            dataFactory.loginUser($scope.login).then(function (data) {
                ipCookie('auth', data.response);
                $http.defaults.headers.common[APP_CONSTANTVALUE.token] = ipCookie('auth');
                $scope.loginmodal.dismiss();

            }, function () {
                notify({
                    message: $translate.instant('login.error.loginerror'),
                    classes: 'btn-danger'
                });
            });


        };



        $scope.registerUser = function () {

            dataFactory.registerUser($scope.register).then(function () {
                $scope.loginmodal.dismiss();
            }, function () {

            });


        };


}]);