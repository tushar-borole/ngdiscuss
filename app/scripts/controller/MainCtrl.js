/*Author: Tushar Borole
Discription:rOOT OF ALL CONTROLLER
Copyright:Copyright:Karma Worldwide Inc. 2014*/


/**
 * MainCtrl - controller
 */
app.controller('MainCtrl', ['$scope', '$http', 'ipCookie', '$state', 'APP_CONSTANTVALUE', '$rootScope', '$auth', 'Restangular','$rootScope',
function ($scope, $http, ipCookie, $state, APP_CONSTANTVALUE, $rootScope, $auth, Restangular,$rootScope) {
        $scope.menbarJson = [];
        $rootScope.userData = ipCookie('auth');
        if (angular.isDefined(ipCookie('auth'))) {
            $http.defaults.headers.common[APP_CONSTANTVALUE.token] = ipCookie('auth').token;
            $rootScope.userData=ipCookie('auth').user
        }
     

        /*Sidebar json is loaded to generate sidebar from static json*/
        $http.get("json/menubar.json").success(function (data) {
            $scope.menubarJson = data;
        });

        $scope.loginUser = function () {

            $auth.authenticate('facebook').then(function (response) {
                ipCookie('auth', response.data);
              $rootScope.userData=response.data.user
            });



        };



        /*function to logout from application*/
        $scope.logOut = function () {

            ipCookie.remove('auth');
            delete $http.defaults.headers.common[APP_CONSTANTVALUE.token];
            $rootScope.userData = {};


        };

        $scope.angularCopy = function (data) {
            var copyData = angular.copy(data);
            return copyData;
        };


}]);