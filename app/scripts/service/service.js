/*Author: Tushar Borole
Discription:Auth service check if user is siggedin
Copyright:Karma Worldwide Inc. 2014*/

'use strict';





/*It is service to check user is authenticate or not*/
app.service('authService', ['$http', '$q', '$timeout', 'Restangular', 'dataFactory', 'ipCookie', '$rootScope', 'APP_CONSTANTVALUE',
    function ($http, $q, $timeout, Restangular, dataFactory, ipCookie, $rootScope, APP_CONSTANTVALUE) {
        $http.defaults.headers.common[APP_CONSTANTVALUE.token] = ipCookie('auth').access_token;
        var defer = $q.defer();
        $timeout(function () {
            dataFactory.loggedInuser().then(function (data) {
                $rootScope.loggedindata = data;
                defer.resolve();
            }, function () {});
        }, 0);
        return defer.promise;
    }]);


/*it is common service to generate error message*/
app.service('errorService', ['$http', '$translate', 'notify',
    function ($http, $translate, notify) {
        return {
            error: function (text, classname, isTranslate) {
                console.log(text);
                var message = isTranslate == false ? text : $translate.instant(text);
                console.log(message);
                notify({
                    message: message,
                    classes: classname
                });
            }
        };
            }]);

/*it is service for manage cproject page*/
app.service('projectService', ['$http',
    function ($http) {
        return {
            getGoalPercent: function (goals, overallgoal) {
                var totalgoal = 0;
                angular.forEach(goals, function (value) {
                    totalgoal += value;
                });
                var percentgoal = (totalgoal / overallgoal) * 100;

                return percentgoal;
            }
        };
            }]);
