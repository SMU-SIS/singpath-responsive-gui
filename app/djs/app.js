'use strict';

//var testing = window.location.search.replace("?testing=", "");
var testing = 'true';

var app = angular.module('dnd', []);
//All of the overrides for testing the controllers.
//Can change this to load a seapparate file(s) when testing.
//Everything in this test setup should have an E2E or other test 
if (testing =='true') {
	
  app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {templateUrl: 'questions/question1.html'});
    $routeProvider.when('/question2', {templateUrl: 'questions/question2.html'});
    $routeProvider.when('/question3', {templateUrl: 'questions/question3.html'});
    $routeProvider.when('/question4', {templateUrl: 'questions/question4.html'});
    $routeProvider.when('/question5', {templateUrl: 'questions/question5.html'});
    $routeProvider.when('/question6', {templateUrl: 'questions/question6.html'});
    $routeProvider.when('/question7', {templateUrl: 'questions/question7.html'});
    $routeProvider.otherwise({redirectTo: 'questions/default.html'});
  }]);

}
