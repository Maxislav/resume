navControllers.directive('blockSkill', function(factSkill, $timeout){
    return {
        restrict: 'A',
        templateUrl: 'partial/skillGraph.html',
        link: function(scope, el, attr){
            factSkill.getSk( scope );
        }
    }
})
navControllers.directive('start', function(){
    return {
        restrict: 'A',
        link: function(scope, el, attr){
            attr.$observe('start', function(value) {
                el.css({
                    left:value+'%'
                })
            });
            attr.$observe('width', function(value) {
                el.css({
                    width:value+'%'
                })
            });
        }
    }
})
navControllers.directive('notUse', function(){
    return {
        restrict: 'A',
        link: function(scope, el, attr){
            attr.$observe('notUse', function(value) {
                if(value==100){
                    el.css({
                        visibility:'hidden'
                    })
                }else{
                    el.css({
                        left:value+'%'
                    })
                }
            });
        }
    }
})

navControllers.controller('graph', function($scope, vhide){
    $scope.v = {};
    $scope.v = vhide.v
    $scope.click = function(){
        if($scope.v.show){
            $scope.v.show =''
        }else{
            $scope.v.show ='show'
        }
    }
})
navControllers.service('vhide', function(){
    this.v={};
})
navControllers.factory('factSkill', function($http, $timeout){
    function formatData(arr){
        for (var i = 0; i<arr.length; i++){
            arr[i].valueStart = setStartDate(arr[i].start || 0);
            arr[i].valueWidth =setWidth(arr[i].start|| 0, arr[i].end||0);
            arr[i].valueNotUse = setNotUse(arr[i].end||0);
            arr[i].dateStart = getDateStart(arr[i].start)
        }
    }
    function getDateStart(string){
        var date = null
        var f = parseFloat;
        if(string){
            var parms = string.split('.');
            var yy = f(parms[0]);
            var MM = f(parms[1]-1);
            var dd = f(parms[2]);
            date = new Date(yy,MM, dd).getTime();

        }
        return date

    }

    function setNotUse(string){
        if(string){
            return setStartDate(string)
        }else{
            return 100
        }

    }

    function setWidth(stringStart, stringEnd){
        if(stringStart && stringEnd){
          return   setStartDate(stringEnd) - setStartDate(stringStart)
        }else {
            var start = stringStart ? setStartDate(stringStart) : 0
            var _end = stringEnd ?  setStartDate(stringEnd) : 100

            return _end - start
        }
    }
    function setStartDate(string){
        var initDate = new Date(2013,0,1);
        var currrentDate = new Date();
        var parms = string.split('.');
        var date
        var f = parseFloat;

        if(string){
            var yy = f(parms[0]);
            var MM = f(parms[1]-1);
            var dd = f(parms[2]);
            date = new Date(yy,MM, dd);
        }else{
            date = initDate;
        }
        var valueStart = date.getTime() - initDate.getTime();
        var allDate = currrentDate.getTime() - initDate.getTime();
        valueStart = 100*valueStart/allDate;
        valueStart = Math.ceil(valueStart);
       // console.log(valueStart)
        return valueStart
    }



    function getSk(scope){
        $http.get('lang/skill.json').success(function(d){
            formatData(d)
            scope.skills = d
        })
    }
    return {
        getSk: getSk
    }
})