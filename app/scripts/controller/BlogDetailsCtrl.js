app.controller('BlogDetailsCtrl', ['$scope', '$http', 'ipCookie', '$state', 'APP_CONSTANTVALUE', 'blogdetailsFactory',
function ($scope, $http, ipCookie, $state, APP_CONSTANTVALUE, blogdetailsFactory) {



        $scope.getBlogsDetails = function () {
            blogdetailsFactory.blogdetailsFactory(1).then(function (data) {
                $scope.blogDetailsData = data.resp;
            }, function () {

            });

        }
        $scope.getBlogsDetails();


}]);