'use strict';

var el
appm

appm.run(function ($rootScope, $location) {
	$rootScope.changeLang = function () {

	}
	$rootScope.orbit;
   // $location.path('/home')
});


navControllers.controller('home', function ($scope, $http, $routeParams, $rootScope ) {
	function getContent() {
     //   $($rootElement).fadeTo(222,0)
       /* $http.get('module/home/' + $scope.lang + '.json').success(function (data) {
			$scope.text = data;

		});*/
		$scope.content = 'module/home/home_'+$scope.lang+'.html';
       // $($rootElement).fadeTo(222,1)
	}
	getContent();
	$scope.act.call($scope.el[0]);


	$rootScope.changeLang = function () {
		getContent()
	}

    $scope.inittt = function(){
        getContent()
    }
}).directive('ngInclude', function () {
    return function ($scope, element, attrs) {
        $scope.element


    //  $scope.inittt();
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

