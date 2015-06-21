app.controller('BlogCtrl', ['$scope', '$http', 'ipCookie', '$state', 'APP_CONSTANTVALUE', 'blogFactory',
function ($scope, $http, ipCookie, $state, APP_CONSTANTVALUE, blogFactory) {


        $scope.blogData = [];

        $scope.getBlogs = function () {
            blogFactory.getBlog().then(function (data) {
                $scope.blogData = data.resp;
            }, function () {

            });

        }
        $scope.getBlogs();


}]);