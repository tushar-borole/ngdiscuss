 /*Author: Tushar Borole
Discription:all restapis are Called from here
Copyright:Karma Worldwide Inc. 2014*/
 'use strict';

 /**
  * Generate Dynamic restangular params
  *
  * @param {string} posttype http request type.
  * @param {string} urlenv it is url env ie if mock or development.
  * @return {object} Returns one of matched object from var restType.
  */
 function restangularParams(posttype, urlenv) {
     var restType = [{
         type: 'get',
         value: 'one'
    }, {
         type: 'post',
         value: 'all'
    }, {
         type: 'customDELETE',
         value: 'all'
    }, {
         type: 'customPUT',
         value: 'all'
    }, {
         type: 'getList',
         value: 'all'
    }];
     if ('mock' === urlenv) {
         return restType[0];
     }
     for (var i = 0; i < restType.length; i++) {
         if (restType[i].type === posttype) {
             return restType[i];
         }
     }
 }


 /*It contain all common dfactorries required for all controller*/
 /*posttype: generate dynamic restangular; this is done because of static json we use
  * url:it take url from url.js
  * */
 app.factory('dataFactory', ['Restangular', 'APP_URL', 'APP_CONFIG',
    function (Restangular, APP_URL, APP_CONFIG) {
         return {
             loginUser: function (data) {
                 var url = APP_URL[APP_CONFIG.urlenv].loginuser;
                 var postType = restangularParams('post', APP_CONFIG.urlenv);
                 return Restangular[postType.value](url)[postType.type](data);
             },
             loggedInuser: function (data) {
                 var url = APP_URL[APP_CONFIG.urlenv].loggedinuser;
                 var postType = restangularParams('get', APP_CONFIG.urlenv);
                 return Restangular[postType.value](url)[postType.type](data);

             },
             registerUser: function (data) {
                 var url = APP_URL[APP_CONFIG.urlenv].registeruser;
                 var postType = restangularParams('post', APP_CONFIG.urlenv);
                 return Restangular[postType.value](url)[postType.type](data);

             }
         };
    }]);

app.factory('blogFactory', ['Restangular', 'APP_URL', 'APP_CONFIG',
    function (Restangular, APP_URL, APP_CONFIG) {
         return {
             getBlog: function () {
                 var url = APP_URL[APP_CONFIG.urlenv].getblog;
                 var postType = restangularParams('get', APP_CONFIG.urlenv);
                 return Restangular[postType.value](url)[postType.type]();
             }
         };
    }]);


app.factory('createblogFactory', ['Restangular', 'APP_URL', 'APP_CONFIG',
    function (Restangular, APP_URL, APP_CONFIG) {
         return {
             createBlog: function (data) {
                 var url = APP_URL[APP_CONFIG.urlenv].createblog;
                 var postType = restangularParams('post', APP_CONFIG.urlenv);
                 return Restangular[postType.value](url)[postType.type](data);
             }
         };
    }]);


app.factory('blogdetailsFactory', ['Restangular', 'APP_URL', 'APP_CONFIG',
    function (Restangular, APP_URL, APP_CONFIG) {
         return {
             blogdetailsFactory: function (blodid) {
                 var url = APP_URL[APP_CONFIG.urlenv].getblogdetails.replace("{{blogid}}",blodid);
                 var postType = restangularParams('get', APP_CONFIG.urlenv);
                 return Restangular[postType.value](url)[postType.type]();
             }
         };
    }]);


app.factory('commentFactory', ['Restangular', 'APP_URL', 'APP_CONFIG',
    function (Restangular, APP_URL, APP_CONFIG) {
         return {
             addComment: function (blodid,data) {
                 var url = APP_URL[APP_CONFIG.urlenv].createcomment.replace("{{blogid}}",blodid);
                 var postType = restangularParams('post', APP_CONFIG.urlenv);
                 return Restangular[postType.value](url)[postType.type](data);
             },
              getComment: function (blodid) {
                 var url = APP_URL[APP_CONFIG.urlenv].getcomment.replace("{{blogid}}",blodid);
                 var postType = restangularParams('get', APP_CONFIG.urlenv);
                 return Restangular[postType.value](url)[postType.type]();
             }
         };
    }]);

