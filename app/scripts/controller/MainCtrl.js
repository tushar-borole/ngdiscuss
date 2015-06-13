/*Author: Tushar Borole
Discription:rOOT OF ALL CONTROLLER
Copyright:Copyright:Karma Worldwide Inc. 2014*/


/**
 * MainCtrl - controller
 */
app.controller('MainCtrl', ['$scope', '$http', 'ipCookie', '$state', 'APP_CONSTANTVALUE',
function ($scope, $http, ipCookie, $state, APP_CONSTANTVALUE) {
        $scope.menbarJson = [];

        /*Sidebar json is loaded to generate sidebar from static json*/
        $http.get("json/menubar.json").success(function (data) {
            $scope.menubarJson = data;
        });


        /*function to logout from application*/
        $scope.logOut = function () {

            ipCookie.remove('auth');
            delete $http.defaults.headers.common[APP_CONSTANTVALUE.token];
            $state.go('app.login');
            $scope.$apply();

        };

        $scope.angularCopy = function (data) {
            var copyData = angular.copy(data);
            return copyData;
        };


}]);