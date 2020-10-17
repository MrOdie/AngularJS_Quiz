'use strict';

angular.module("results", []).component("results", {
    templateUrl: "results/results.template.html",
    controller: [
        "$scope",
        function ResultsCtrl($scope){
            $scope.page = "results";
        }
    ],

})