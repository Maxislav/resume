angular.module('phonecatAnimations', ['ngAnimate'])
var appm = angular.module('appm', [
        'ngRoute',
        'navControllers',
        'phonecatAnimations'
    ])
    .directive('directiveName',function () {
    return function ($scope, element, attrs) {
        $scope.$watch(attrs.directiveName, function (value) {
        });
    }
}).directive('viewContainer',function () {
    return function ($scope, element, attrs) {
        //element
        $scope.$watch(attrs.viewContainer, function (value) {
            $scope.element = null
        });
    }
}).config(['$routeProvider',

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
                    redirectTo: '/home'
                    // controller: 'print'
                })

        }
    ]).controller('nav',function ($scope, $http, $location, $routeParams, $rootScope) {
    function lang(l) {
        $http.get('lang/' + l + '.json').success(function (data) {
            $scope.navs = data;
            //  $location.path('/dd');
        });
    };
    $scope.lang = "en";
    lang("en");
    $scope.chLang = function (p) {
        lang($scope.lang);
        $scope.chContent && $scope.chContent(p)
        $rootScope.changeLang();
    }
    var loc = '' + $location.path();
    $location.path('/dd');


setTimeout(function(){
    window.location.href = '#'+loc
}, 1)

    $scope.cl = $scope.cl ? $scope.cl : [];
    $scope.el = $scope.el ? $scope.el : [];
    $scope.act = function () {
        for (var i = 0; i < $scope.cl.length; i++) {
            (this.$index != i) && ($scope.cl[i] = null)
        }
        $scope.cl[this.$index] = 'active';
    }
    $scope.initEl = function (el) {
        $scope.el.push(this)
    }

    $scope.getLocation = function () {
        return $location.path()
    }
    $scope.path = function (d) {
        $location.path(d);
    }
})

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


