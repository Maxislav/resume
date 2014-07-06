angular.module('phonecatAnimations', ['ngAnimate'])
var appm = angular.module('appm', [
        'ngRoute',
        'navControllers',
        'phonecatAnimations'
    ])
    .directive('viewContainer',function () {
        return function ($scope, element, attrs) {
            //element
            $scope.$watch(attrs.viewContainer, function (value) {
                $scope.element = null
            });
        }
    })
    .directive('kkk', function(){
        return function ($scope, element, attrs) {
            element
            //angular.bootstrap(element, [])
        }
    })
    .run(function ($rootScope, $location) {
        $rootScope.changeLang = function () {

        }
        $rootScope.orbit;

        // $location.path('/contact')
    })




appmConfig();
function appmConfig(){
    appm.config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider.
                when('/home', {
                    templateUrl: 'module/home/home.html',
                    controller: 'home'
                }).
                when('/about', {
                    templateUrl: 'module/about/about.html',
                    controller: 'about'
                }).
                when('/web', {
                    templateUrl: 'module/web/web.html',
                    controller: 'web'
                }).
                when('/web/:type', {
                    templateUrl: 'module/web/web.html',
                    controller: 'web'
                }).
                when('/design', {
                    templateUrl: 'module/design/design.html',
                    controller: 'design'
                }).

                when('/contact', {
                    templateUrl: 'module/contact/contact.html',
                    controller: 'contact'
                }).
                when('/print', {
                    templateUrl: 'module/contact/contact.html',
                    controller: 'print'
                }).
                otherwise({
                 //   redirectTo: '/home'
                    // controller: 'print'
                })

        }
    ])
}
var navControllers = angular.module('navControllers', [ ])
    .directive('orbit', function ($http, $rootScope) {
        return function ($scope, element, attrs) {
            if (!$rootScope.orbit) {

                $http.get('lib/jQuery/jquery.orbit-1.3.0.js').success(function (data) {
                    $rootScope.orbit = data;
                    eval(data);
                    $(element).orbit()
                    $(element).css({opacity: 1})

                })

            } else {
                $(element).orbit();
                $(element).css({opacity: 1})
            }
        }
    })
navControllers.run(function ($rootScope) {
    $rootScope.orbit = null
})


