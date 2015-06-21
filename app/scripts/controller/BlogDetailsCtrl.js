app.controller('BlogDetailsCtrl', ['$scope', '$http', 'ipCookie', '$state', 'APP_CONSTANTVALUE', 'blogdetailsFactory', 'commentFactory', '$stateParams',
function ($scope, $http, ipCookie, $state, APP_CONSTANTVALUE, blogdetailsFactory, commentFactory, $stateParams) {


        $scope.comment = {};
        $scope.commentData = []
        $scope.getBlogsDetails = function () {
            blogdetailsFactory.blogdetailsFactory($stateParams.blogid).then(function (data) {
                $scope.blogDetailsData = data.response;
            }, function () {

            });

        }
        console.log($stateParams)

        $scope.getComment = function () {

            commentFactory.getComment($stateParams.blogid).then(function (data) {
                $scope.commentData = data.response;

            }, function () {

            });


        };



        $scope.addComment = function () {

            commentFactory.addComment($stateParams.blogid, $scope.comment).then(function (data) {
                $scope.getComment();
            }, function () {

            });


        };
        $scope.getComment()
        $scope.getBlogsDetails();


}]);