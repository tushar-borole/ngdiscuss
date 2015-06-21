/*Author: Tushar Borole
Discription:It contain page route information
Copyright:Karma Worldwide Inc. 2014*/


/*$stateProvider:- Provider service provided by angular ui router
$translateProvider:-Provider service provided by angular translate
,APP_CONSTANT,APP_CONFIG:- Custom service import in config*/
function config($stateProvider, $urlRouterProvider, $translateProvider, ngFabFormProvider, RestangularProvider, APP_CONSTANT, APP_CONFIG, $enviornment, $authProvider, APP_URL) {
    $urlRouterProvider.otherwise('/index/blog');
    $stateProvider

        .state('index', {
            abstract: true,
            url: "/index",
            templateUrl: "views/common/content.html",
        })
        .state('index.blog', {
            url: "/blog",
            templateUrl: "views/blog.html",
            controller: "BlogCtrl",
            data: {
                pageTitle: 'Example view'
            }
        })
        .state('index.article', {
            url: "/article/:blogid",
            templateUrl: "views/article.html",
            controller: "BlogDetailsCtrl",
            data: {
                pageTitle: 'Example view'
            }
        }).state('index.login', {
            url: "/login",
            templateUrl: "views/login.html",
            data: {
                pageTitle: 'Example view'
            }
        }).state('index.register', {
            url: "/register",
            templateUrl: "views/register.html",
            data: {
                pageTitle: 'Example view'
            }
        }).state('index.createblog', {
            url: "/createblog",
            templateUrl: "views/createblog.html",
            controller: "CreateBlogCtrl",
            data: {
                pageTitle: 'Example view'
            },
            resolve: {
                authorization: ["ngPermissionService", function (ngPermissionService) {
                    return ngPermissionService.role(["admin"])

            }]
            }
        })
    $translateProvider.useStaticFilesLoader({
        prefix: 'i18/',
        suffix: '.json'
    });
    //var baseurl = $environment.url;
    console.log($enviornment)
    RestangularProvider.setBaseUrl($enviornment.backendurl);

    $translateProvider.preferredLanguage('en');
    ngFabFormProvider.extendConfig({
        setAsteriskForRequiredLabel: true
    });

    /*It is custom insert for ngFabFor directive*/
    var customInsertFn = function (compiledAlert, el, attrs) {
        // insert after or after parent if checkbox or radio
        if (angular.isDefined(attrs.$attr.chosen)) {
            $(".chosen-container").after(compiledAlert);
        } else {
            el.after(compiledAlert);
        }
    };
    ngFabFormProvider.setInsertErrorTplFn(customInsertFn);

    console.log(window.location.href)

    //$authProvider.authHeader = 'x-access-token';
    //$authProvider.httpInterceptor = false; // Add Authorization header to HTTP request
    //$authProvider.tokenPrefix = 'twitterAuth'; // Local Storage name prefix
    //$authProvider.loginRedirect = false;


    $authProvider.facebook({
        clientId: $enviornment.facebookAppId,
        url: $enviornment.backendurl + APP_URL[$enviornment.urlname].facebookconnect
            /*  authorizationEndpoint: 'https://www.facebook.com/v2.3/dialog/oauth',
              redirectUri: window.location.origin + '/',
              scope: 'publish_actions',
              scopeDelimiter: ',',
              requiredUrlParams: ['display', 'scope', 'publish'],
              display: 'popup',
              type: '2.0',
              popupOptions: {
                  width: 481,
                  height: 269
              }*/
    });





}
app
    .config(config)
    .run(function ($rootScope, $state, APP_CONSTANTVALUE, $enviornment, $http, ipCookie, dataFactory) {
        $rootScope.$state = $state;
        /*fallback image in application*/
        $rootScope.fallbackimage = {};
        $rootScope.fallbackimage = APP_CONSTANTVALUE.fallbackimage;
        $rootScope.$constant = APP_CONSTANTVALUE;
        $enviornment.jsonurl = window.location.protocol + '//' + window.location.host;
        $enviornment.name = $enviornment.jsonurl += $enviornment.jsonpath;
        console.log($enviornment.name)
            /*summernote global configuration is set here*/
        $rootScope.summernoteConfig = {
            height: 150,
            toolbar: [
          ['style', ['bold', 'italic', 'underline', 'clear']],
          ['fontsize', ['fontsize']],
          ['color', ['color']],
          ['para', ['ul', 'ol', 'paragraph']],
          ['height', ['height']]
        ]
        };

        $rootScope.$on('ngPermission', function (event, roles, defer, routeObject) {
            if (angular.isDefined(ipCookie('auth'))) {
                $http.defaults.headers.common[APP_CONSTANTVALUE.token] = ipCookie('auth').token;
            }
            dataFactory.loggedInuser().then(function (data) {
              
                defer.resolve();
            }, function () {
                $state.go('index.blog')

            })



        });



        console.log(window.location)


    });