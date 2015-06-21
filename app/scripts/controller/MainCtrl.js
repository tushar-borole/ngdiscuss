/*Author: Tushar Borole
Discription:rOOT OF ALL CONTROLLER
Copyright:Copyright:Karma Worldwide Inc. 2014*/


/**
 * MainCtrl - controller
 */
app.controller('MainCtrl', ['$scope', '$http', 'ipCookie', '$state', 'APP_CONSTANTVALUE', '$rootScope', '$auth', 'Restangular', '$rootScope', 'localStorageService',
function ($scope, $http, ipCookie, $state, APP_CONSTANTVALUE, $rootScope, $auth, Restangular, $rootScope, localStorageService) {
        $scope.menbarJson = [];
        localStorageService.bind($rootScope, 'userData', null, 'auth');
        if (angular.isDefined($rootScope.userData)) {
            $http.defaults.headers.common[APP_CONSTANTVALUE.token] = $rootScope.userData.token;

        }


        /*Sidebar json is loaded to generate sidebar from static json*/
        $http.get("json/menubar.json").success(function (data) {
            $scope.menubarJson = data;
        });



        $scope.loginUser = function () {

            $auth.authenticate('facebook').then(function (response) {

                localStorageService.bind($rootScope, 'userData', response.data, 'auth');
                    $http.defaults.headers.common[APP_CONSTANTVALUE.token] = response.data.token;

            });



        };



        /*function to logout from application*/
        $scope.logOut = function () {

            localStorageService.remove('auth');
            delete $http.defaults.headers.common[APP_CONSTANTVALUE.token];
            $rootScope.userData = {};


        };

        $scope.angularCopy = function (data) {
            var copyData = angular.copy(data);
            return copyData;
        };


}]);