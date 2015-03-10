$().ready(function (){
	bug.render();
})


//Views

//higher View
var highestNumber = bug.data([234]);
var template = '<h1> {{ 0 }} </h1>';
var highest = new bug.view(template, highestNumber);


//click templates
var clickTemplate = '<div> {{ 0 }} </div>';

//click1
var click1Number = bug.data([5]);
var click1 = new bug.view(clickTemplate, click1Number);

//click2
//var click2Number = bug.data([3]);
var click2 = new bug.view(clickTemplate, click1Number);



//Controller
var watchHighest = new bug.controller([highest, click1, click2]);
watchHighest.on(function(target,data){
	data[0]++;
},'click');



/*

var option1 = new bug.view(template, data);
var option2 = new bug.view(template, data);

*/


