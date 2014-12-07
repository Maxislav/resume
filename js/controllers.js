'use strict';

var el
appm.controller('nav', function ($scope, $http, $location, showService, $rootScope) {
    //  showService.show()
    function lang(l) {
        $http.get('lang/' + l + '.json').success(function (data) {
            $scope.navs = data;
            for(var i = 0; i< $scope.navs.length; i++){
                if($scope.navs[i].href ==  showService.activeString ){
                    $scope.navs[i].active = 'active'
                }
            }
        });
    };
    function langPpd(l){
        $http.get('lang/ppd.' + l + '.json').success(function (data) {
            $scope.langPpd = data;
        });
    }

    $scope.lang = "en";
    lang("en");
    langPpd("en")

    $scope.download = 'Download'
	$scope.olo = 'Lipatov_en.pdf'
    $scope.chLang = function (p) {
        showService.el = []
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
        langPpd($scope.lang);
        $rootScope.changeLang()

    }
    $scope.getLocation = function () {
        return $location.path()
    }
    $scope.path = function (d) {
        $location.path(d);
    }
})

navControllers.controller('home', function ($scope, $http, $routeParams, $rootScope, showService ) {
    function getContent() {
        $scope.content = 'module/home/home_'+$scope.lang+'.html';
        $scope.includeHtml = 'module/home/skills_'+$scope.lang+'.html';
    }
    showService.active('#/home')

    getContent();
    $rootScope.changeLang = function () {
        getContent()
    }

})





navControllers.controller('about', function ($scope, $http, $routeParams, $rootScope,showService) {
	function getContent() {
		$http.get('module/about/' + $scope.lang + '.json').success(function (data) {
			$scope.text = data;
		});
		$scope.content = 'module/about/about_'+$scope.lang+'.html';
	}

	getContent();
    showService.active('#/about')
	$rootScope.changeLang = function () {
		getContent()
	}
})

navControllers.controller('web', function ($scope, $http, $routeParams, $rootScope,showService) {
	function getContent() {
		$http.get('module/web/' + $scope.lang + '.json').success(function (data) {
			$scope.text = data;
		});
		if($routeParams.type){
			$scope.content = 'module/web/'+$routeParams.type+'/'+$routeParams.type+'_'+$scope.lang+'.html';
		}else{
			$scope.content = 'module/web/web_'+$scope.lang+'.html';
		}
	}
	getContent();
    $scope.pp = 'block';

    showService.active('#/web')
	$rootScope.changeLang = function () {
		getContent()
	}
});

navControllers.controller('design', function ($scope, $http, $routeParams, $rootScope, showService) {
    function getContent() {
        $http.get('module/design/' + $scope.lang + '.json').success(function (data) {
            $scope.text = data;
        });
        $scope.content = 'module/design/design_'+$scope.lang+'.html';
    }

    getContent();
    showService.active('#/design')
    $rootScope.changeLang = function () {
        getContent()
    }
})
navControllers.controller('print', function ($scope, $http, $routeParams, $rootScope, showService) {
    function getContent() {
        $http.get('module/print/' + $scope.lang + '.json').success(function (data) {
            $scope.text = data;
        });
        $scope.content = 'module/print/print_'+$scope.lang+'.html';
        $scope.includeHtml = 'module/home/skills_'+$scope.lang+'.html';
        $scope.experienceUrl = 'module/about/about_'+$scope.lang+'.html';

    }
    getContent();
    showService.active('#/print')
    $rootScope.changeLang = function () {
        getContent()
    }
})

