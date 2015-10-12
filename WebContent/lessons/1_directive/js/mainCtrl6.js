/**
 * 
 */
var app=angular.module('directive_tut6',[]);

app.directive('boxer',function(){
	return{
		scope:{
			message:"&"
		},
		restrict:"E",
		template:'<input type="text" ng-model="name">{{name}}'+
		'<div ng-click="message({name:name})">Done</div>'
	}
});

app.controller('mainCtrl',function($scope){
	$scope.sendMessage=function(name){
		alert(name+" is on leave");
	}
});