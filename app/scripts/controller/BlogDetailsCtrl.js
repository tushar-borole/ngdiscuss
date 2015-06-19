app.controller('BlogDetailsCtrl', ['$scope', '$http', 'ipCookie', '$state', 'APP_CONSTANTVALUE', 'blogdetailsFactory','commentFactory',
function ($scope, $http, ipCookie, $state, APP_CONSTANTVALUE, blogdetailsFactory,commentFactory) {


$scope.comment={}
        $scope.getBlogsDetails = function () {
            blogdetailsFactory.blogdetailsFactory(1).then(function (data) {
                $scope.blogDetailsData = data.response;
            }, function () {

            });

        }
        
        $scope.getComment = function () {

            commentFactory.getComment(1).then(function (data) {
              $scope.commentData=data.response;

            }, function () {
        
            });


        };



        $scope.addComment = function () {

            commentFactory.addComment(1,$scope.comment).then(function () {
                
            }, function () {

            });


        };
    $scope.getComment()
        $scope.getBlogsDetails();


}]);