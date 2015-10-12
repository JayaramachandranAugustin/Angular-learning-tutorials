/**
 * 
 */

var app=angular.module("directive_tut1",[]);

app.controller("firsttag",function($scope){
	$scope.employee={
			name:"jayaram",
			designation:"softwareeengineer"
	}
});

app.controller("secondtag",function($scope){
	$scope.employee={
			name:"david",
			designation:"softwareeengineer"
	}
});

app.directive("displayname",function(){
	return{
		restrict:"E",
		templateUrl:"namedesig.html"
	}
});

app.controller("commoncontroller",function($scope){
	$scope.employee1={
			name:"david",
			designation:"softwareeengineer"
	}
	$scope.employee2={
			name:"jayaram",
			designation:"softwareeengineer"
	}
});

app.directive("commondirective",function(){
	return{
		restrict:"E",
		scope:{
			employee:'=detail'
		},
		templateUrl:"namedesig.html"
	}
});