'use strict';


appm.controller('nav', function ($scope, $http, $location, $routeParams, $rootScope) {
	function lang(l) {
		$http.get('lang/' + l + '.json').success(function (data) {
			$scope.navs = data;
		});
	};
	$scope.lang = "en";
	lang("en");
	$scope.chLang = function (p) {
		lang($scope.lang);
		$scope.chContent && $scope.chContent(p)
		$rootScope.changeLang();
	}
     var loc = ''+ $location.path();
    $location.path('/dd');


	$scope.cl = $scope.cl ? $scope.cl: [];
	$scope.el = $scope.el ? $scope.el :[];
	$scope.act = function (){
		for (var i=0; i<$scope.cl.length; i++){
			(this.$index!=i) && ($scope.cl[i] = null)
		}
		$scope.cl[this.$index] ='active';
	}
	$scope.initEl = function(el){
		$scope.el.push(this)
	}
})

appm.run(function ($rootScope, $location) {
	$rootScope.changeLang = function () {

	}
	$rootScope.orbit;
   // $location.path('/home')
});


navControllers.controller('home', function ($scope, $http, $routeParams, $rootScope ) {
	function getContent() {
     //   $($rootElement).fadeTo(222,0)
        $http.get('module/home/' + $scope.lang + '.json').success(function (data) {
			$scope.text = data;

		});
		$scope.content = 'module/home/home_'+$scope.lang+'.html';
       // $($rootElement).fadeTo(222,1)
	}
	getContent();
	$scope.act.call($scope.el[0]);


	$rootScope.changeLang = function () {
		getContent()
	}
}).directive('ngInclude', function () {
    return function ($scope, element, attrs) {
        $scope.element
        //element
        /*$scope.$watch(attrs.viewContainer, function (value) {
            $scope.element = null
        });*/
    }
})
navControllers.controller('about', function ($scope, $http, $routeParams, $rootScope) {
	function getContent() {
		$http.get('module/about/' + $scope.lang + '.json').success(function (data) {
			$scope.text = data;
		});
		$scope.content = 'module/about/about_'+$scope.lang+'.html';
	}

	getContent();
	$scope.act.call($scope.el[1]);
	$rootScope.changeLang = function () {
		getContent()
	}
})

navControllers.controller('web', function ($scope, $http, $routeParams, $rootScope) {
	function getContent() {
		$http.get('module/web/' + $scope.lang + '.json').success(function (data) {
			$scope.text = data;
		});
		if($routeParams.type){
			$scope.content = 'module/web/'+$routeParams.type+'/'+$routeParams.type+'_'+$scope.lang+'.html';
            ///$($scope.content).css({opacity:1})
		}else{
			$scope.content = 'module/web/web_'+$scope.lang+'.html';
		}
	}
	getContent();
    $scope.pp = 'block';

	$scope.act.call($scope.el[2]);
	$rootScope.changeLang = function () {
		getContent()
	}
});
navControllers.controller('contact', function ($scope, $http, $routeParams, $rootScope) {
    function getContent() {
        $http.get('module/contact/' + $scope.lang + '.json').success(function (data) {
            $scope.text = data;
        });
        $scope.content = 'module/contact/contact_'+$scope.lang+'.html';
    }

    getContent();
    $scope.act.call($scope.el[4]);
    $rootScope.changeLang = function () {
        getContent()
    }
})

navControllers.controller('design', function ($scope, $http, $routeParams, $rootScope) {
    function getContent() {
        $http.get('module/design/' + $scope.lang + '.json').success(function (data) {
            $scope.text = data;
        });
        $scope.content = 'module/design/design_'+$scope.lang+'.html';
    }

    getContent();
    $scope.act.call($scope.el[3]);
    $rootScope.changeLang = function () {
        getContent()
    }
})
navControllers.controller('print', function ($scope, $http, $routeParams, $rootScope) {
    function getContent() {
        $http.get('module/design/' + $scope.lang + '.json').success(function (data) {
            $scope.text = data;
        });
        $scope.content = 'module/design/design_'+$scope.lang+'.html';
    }

    getContent();
    $scope.act.call($scope.el[5]);
    $rootScope.changeLang = function () {
        getContent()
    }
})

