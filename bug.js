
var bug = {};
bug.view = function (template, data){
	
	 //console.log(template.slice(0,template.search('</')) +  'id="' + id + '" '+  template.slice(template.search('</'),template.length));
	var obj = {
		id : 'bug.view.list['+bug.view.list.length+']',
		html : template,
		listeners : [],
		click : function(){
			for (var i = 0; i < this.listeners.length; i++) {
				this.listeners[i].trigger('click',obj);
			};
		},
		render : function(parent){
			var str = this.html;
			var index = str.slice(str. search('{{')+2, str.search('}}'));
			index = index.trim();
			str = str.replace( /{{.*}}/g , data[index]);

			parent = parent || 'body';

			str = template.slice(0,str.search('>')) +  ' onclick="' + this.id + '.click()"'+  str.slice(str.search('>'),str.length);
			$(parent).append(str)
		}	
	};
	bug.view.list.push(obj)
	return obj;
}

bug.data = function (data){
	bug.data.list.push(data);
	return data;
}

bug.controller = function (views){
	var obj = {};
	obj.trigger = function(eventType, obj){
		console.log('event :',eventType);
		console.log('obj:',obj);
		for (var i = 0; i < this.events.length; i++) {
			if(this.events[i]
		};
	}
	obj.events = [];
	obj.on = function(cb, eventType){
		
	};
	//adding listeners to the views
	for (var i = 0; i < views.length; i++) {
		views[i].listeners.push(obj);
	};
	return obj;
}

bug.view.list = [];
bug.data.list = [];
bug.controller.list = [];