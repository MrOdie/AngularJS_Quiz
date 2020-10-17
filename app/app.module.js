"use strict";

angular.module("myApp", [
    "ngRoute",
    "view1",
    "view2",
	"questions",
	"results",
	"version",
	"myApp.services",
	"data"
]).config([
	"$locationProvider",
	"$routeProvider",
	function ($locationProvider, $routeProvider) {
		$locationProvider.hashPrefix("!");

		$routeProvider.when("/view1", {
			template: "<view1></view1>",
		});
		$routeProvider.when("/view2", {
			template: "<view2></view2>",
		});
		$routeProvider.when("/questions", {
			template: "<questions></questions>",
		});
		$routeProvider.when("/results", {
			template: "<results></results>",
		});
		$routeProvider.otherwise({ redirectTo: "/view1" });
	},
]);
