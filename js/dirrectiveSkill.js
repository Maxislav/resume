navControllers.directive('blockSkill', function(factSkill, $timeout){
    return {
        restrict: 'A',
        templateUrl: 'partial/skillGraph.html',
        link: function(scope, el, attr){
            factSkill.getSk( scope )
        }
    }
})
navControllers.factory('factSkill', function($http, $timeout){


    function formatData(){

    }



    function getSk(scope){
        $http.get('lang/skill.json').success(function(d){
            scope.skills = d
        })
    }
    return {
        getSk: getSk
    }
})