/*Author: Tushar Borole
Discription:Register controller
Copyright:Copyright:Karma Worldwide Inc. 2014*/


/**
 * MainCtrl - controller
 */
app.controller('CreateBlogCtrl', ['$scope', '$http', 'ipCookie', '$state', 'APP_CONSTANTVALUE', 'createblogFactory',
function ($scope, $http, ipCookie, $state, APP_CONSTANTVALUE, createblogFactory) {





        $scope.createBlog = function (isValid) {
            if (isValid) {

                createblogFactory.createBlog($scope.createblog).then(function () {
                    $state.go('index.blog')
                }, function () {

                });
            }


        };


}]);