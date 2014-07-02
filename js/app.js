angular.module('phonecatAnimations', ['ngAnimate'])
var appm = angular.module('appm', [
        'ngRoute',
        'navControllers',
        'phonecatAnimations'
    ]).directive('directiveName',function () {
    return function ($scope, element, attrs) {
        $scope.$watch(attrs.directiveName, function (value) {
        });
    }
}).directive('viewContainer', function () {
    return function ($scope, element, attrs) {
        //element
        $scope.$watch(attrs.viewContainer, function (value) {
            $scope.element = null
        });
    }
});

var navControllers = angular.module('navControllers', [ ])
    .directive('orbit', function ($http, $rootScope) {

        return function ($scope, element, attrs) {
            if (!$rootScope.orbit) {

                $http.get('lib/jQuery/jquery.orbit-1.3.0.js').success(function (data) {
                    $rootScope.orbit = data;
                    eval(data);
                    $(element).orbit()
                    $(element).css({opacity:1})

                })

            } else {
                $(element).orbit();
                $(element).css({opacity:1})
            }
        }
    })
navControllers.run(function ($rootScope) {
    $rootScope.orbit = null

})

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
            otherwise({
                redirectTo: '/home'
            });
    }
]);
