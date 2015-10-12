/**
 * 
 */
var app=angular.module("directive_tut3",[]);

app.directive("firstdirective",function(){
	return function(scope,element){
		element.bind("click",function(){
			alert("You clicked me");
		});
	}
});

app.directive("enter",function(){
	return function(scope,element,attrs){
		element.bind("mouseenter",function(){
			element.addClass(attrs.enter);
		});
	}
});

app.directive("leave",function(){
	return function(scope,element,attrs){
		element.bind("mouseleave",function(){
			element.removeClass(attrs.leave);
		});
	}
});