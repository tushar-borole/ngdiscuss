/*Author: Tushar Borole
Discription:Login page controller
Copyright:Karma Worldwide Inc. 2014*/




app.controller('CommentCtrl', ['$scope', '$rootScope', 'dataFactory', 'ipCookie', 'notify', '$translate', 'ngFabForm', '$state', 'APP_CONSTANTVALUE', '$timeout','commentFactory','ipCookie','$http',
function ($scope, $rootScope, dataFactory, ipCookie, notify, $translate, ngFabForm, $state, APP_CONSTANTVALUE, $timeout,commentFactory,ipCookie,$http) {

    $http.defaults.headers.common[APP_CONSTANTVALUE.token] = ipCookie('auth');
        /*Initialization of variable start*/
        $scope.login = {};
        $scope.customFormOptions = angular.copy(ngFabForm.config);

        /*Function to login the user
         * return authentication tocken which is saved in localstorage*/
        $scope.getComment = function () {

            commentFactory.getComment($rootScope.blogid).then(function (data) {
              $scope.commentData=data.response;

            }, function () {
        
            });


        };



        $scope.addComment = function () {

            commentFactory.addComment($rootScope.blogid,$scope.comment).then(function () {
                
            }, function () {

            });


        };
    $scope.getComment()


}]);