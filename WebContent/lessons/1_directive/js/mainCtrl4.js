/**
 * 
 */

var app=angular.module("directive_app4",[]);

app.directive("enter",function(){
	return function(scope,element,attrs){
		element.bind("mouseenter",function(){
			scope.$apply(attrs.enter);
		})
	}
});

app.controller("controller",function($scope){
	$scope.talkSlowly=function(){
		alert("Talk slowly");
	}
	
	$scope.talkLoudly=function(){
		alert("Talk loudly");
	}
});
