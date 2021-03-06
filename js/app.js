//angular.module('phonecatAnimations', ['ngAnimate'])
var appm = angular.module('appm', [
        'ngRoute',
        'navControllers',
        'ngAnimate',
        'ngCookies'
    ])
    .directive('kkk', function(){
        return function ($scope, element, attrs) {
            element
        }
    })
    .run(function ($rootScope, $location) {
        $rootScope.changeLang = function () {

        }
        $rootScope.orbit;
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
            when('/print', {
                templateUrl: 'module/contact/contact.html',
                controller: 'print'
            }).
            otherwise({
                redirectTo: '/home'
            })

    }
])

var navControllers = angular.module('navControllers', [ ])
    .directive('orbit', function ($http, $rootScope) {
        return function ($scope, element, attrs) {
	        Array.prototype.forEach.call(element[0].children,(child)=>{
		        child.style.width = element.width()+'px'
	        } );
            if (!$rootScope.orbit) {
                $http.get('lib/jQuery/jquery.orbit-1.3.0.js').success(function (data) {
                    $rootScope.orbit = data;
                    eval(data);
                    $(element).orbit();
                    $(element).css({opacity: 1})

                })

            } else {

                $(element).orbit();
                $(element).css({opacity: 1})
            }
        }
    })
    .directive('jscroll', function($http, $rootScope){
        return function($scope, element, attrs){


			$(element).scrollNav({
				headlineText: '',
				topLinkText: '',
				fixedMargin: 140,
				scrollOffset: 50
			})



        }
    })
    .directive('transport', function(){
        return function ($scope, element, attrs, $http, $rootScope) {
            var largeImg = document.getElementById('largeImg');
            var thumbs = document.getElementById('thumbs');
            thumbs.onclick = function(e) {
                e = e || window.event;
                var target = e.target || e.srcElement;

                while(target != this) {

                    if (target.nodeName == 'A') {
                        showThumbnail(target.href, target.title);
                        return false;
                    }

                    target = target.parentNode;
                }
            }
            function showThumbnail(href, title) {
                largeImg.src = href;
                largeImg.alt = title;
            }
            var imgs = thumbs.getElementsByTagName('img');
            for(var i=0; i<imgs.length; i++) {
                var url = imgs[i].parentNode.href;
                var img = document.createElement('img');
                img.src = url;
            }

        }
    })

navControllers.run(function ($rootScope) {
    $rootScope.orbit = null;
    $rootScope.jscroll = null;

})
navControllers.directive('navsElements', function(showService){
    return {
        restrict: 'A',
        link: function(scope, el, attr){
            showService.el.push(el)
        }
    }
})
navControllers.service('showService', function(){
    var s = this;
    this.el = [];
    this.activeString = null;
    this.active = function(string){
        for(var i = 0; i< s.el.length; i++){
            if(s.el[i].attr('href')==string){
                s.el[i].addClass('active')
                s.activeString = string
            }else{
                s.el[i].removeClass('active')
            }
        }
    }
})



