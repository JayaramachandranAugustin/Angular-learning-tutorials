/**
 * 
 */

var app=angular.module('directive_tut',[]);
/* This directive matches with attribute name*/
app.directive('firstdirectiveattribute',function(){
	return{
		restrict:'A',
		template:'<div> This is the first attribute directive</div>'
	}
});

/* This directive matches with class name*/
app.directive('firstdirectiveclass',function(){
	return{
		restrict:'C',
		template:'<div> This is the first class directive</div>'
	}
});

/* This directive matches with element name*/
app.directive('firstdirective',function(){
	return{
		restrict:'E',
		template:'<div> This is the first element directive</div>'
	}
});

/* This directive returns the HTML page */
app.directive('includehtml',function(){
	return{
		templateUrl:'car.html'
	}
});


/* This directive returns the HTML page based on the calling element and attribute */
app.directive('includehtmlfunction',function(){
	return{
		templateUrl:function(elem,attr){
			return attr.name+".html"
		}
	}
});
