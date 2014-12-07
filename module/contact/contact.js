navControllers.controller('contact', function ($scope, $http, $routeParams, $rootScope, showService) {
    function getContent() {
        $http.get('module/contact/' + $scope.lang + '.json').success(function (data) {
            $scope.text = data;
        });
        $scope.content = 'module/contact/contact_'+$scope.lang+'.html';
    };
    $scope.mapUrl = 'module/contact/map.html'

    getContent();

    showService.active('#/contact')
    $rootScope.changeLang = function () {
        getContent()
    }
})
navControllers.directive('leafletMap', function(){
    return {
        restrict: 'A',
        controller: function($scope){
            $scope.map = L.map('map').setView([50.4, 30.48], 11);
            console.log('a');
            L.tileLayer('https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png', {
                maxZoom: 18,
                id: 'examples.map-i875mjb7'
            }).addTo($scope.map);

            L.circle([50.39, 30.49], 2000, {
                color: 'transparent',
                fillColor: '#f03',
                fillOpacity: 0.2
            }).addTo($scope.map).bindPopup("lmaxim@mail.ru");
        },
        link: function(scope, el, attr){
            console.log('b');
        }
    }
})