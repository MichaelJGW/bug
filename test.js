$().ready(function (){
	highest.render();
	click1.render();
	click2.render();
})


//Views
var highestNumber = bug.data([234]);
var template = '<div> {{ 0 }} </div>';
var highest = new bug.view(template, highestNumber);


var click1Number = bug.data([5]);
var click1 = new bug.view(template, click1Number);


var click2Number = bug.data([3]);
var click2 = new bug.view(template, click2Number);


//Controller
var watchHighest = new bug.controller([highest, click1, click2]);
watchHighest.on(function(views){
	console.log(click1)
},'click');



/*

var option1 = new bug.view(template, data);
var option2 = new bug.view(template, data);

*/


