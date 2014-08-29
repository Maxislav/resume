'use strict';

var el
appm.controller('nav', function ($scope, $http, $location, $routeParams, $rootScope, showService) {
    //  showService.show()
    function lang(l) {
        $http.get('lang/' + l + '.json').success(function (data) {
            $scope.navs = data;
            //  $location.path('/dd');
        });
    };
    $scope.lang = "en";
    lang("en");
    $scope.download = 'Download'
	$scope.olo = 'Lipatov_en.pdf'
    $scope.chLang = function (p) {
        switch (p){
            case 'ru':
				$scope.olo = 'Lipatov_en.pdf';
                $scope.download = 'Download';

                break;
            default :
				$scope.olo = 'Lipatov_ru.pdf';
                $scope.download = 'Скачать';


        }

        lang($scope.lang);
        $scope.chContent && $scope.chContent(p)
        $rootScope.changeLang();
    }
    var loc = '' + $location.path();
    $location.path('/');




    setTimeout(function () {
          window.location.href = '#' + (loc ? loc : '/home')
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

navControllers.controller('home', function ($scope, $http, $routeParams, $rootScope ) {
    function getContent() {
        $scope.content = 'module/home/home_'+$scope.lang+'.html';
    }
    getContent();
    $scope.act.call($scope.el[0]);


    $rootScope.changeLang = function () {
        getContent()
    }

    $scope.inittt = function(){
        getContent()
    }
})



appm.service('showService', function(){
    this.show = function(){
        alert('dd');
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
        $http.get('module/print/' + $scope.lang + '.json').success(function (data) {
            $scope.text = data;
        });
        $scope.content = 'module/print/print_'+$scope.lang+'.html';
    }

    getContent();
    $scope.act.call($scope.el[5]);
    $rootScope.changeLang = function () {
        getContent()
    }
})

