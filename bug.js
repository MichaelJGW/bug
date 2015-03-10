
var bug = {};
bug.view = function (template, data){
	
	 //console.log(template.slice(0,template.search('</')) +  'id="' + id + '" '+  template.slice(template.search('</'),template.length));
	var obj = {
		id : 'bug.view.list['+bug.view.list.length+']',
		html : template,
		data : data,
		listeners : [],
		listIndex : bug.view.list.length,
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
			return str;
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
		//console.log('event :',eventType);
		//console.log('obj:',obj);
		var rerender = false;
		if(this.events['all']){
			this.events['all'](obj, obj.data);
			rerender = true;
		}
		if(this.events[eventType]){
			this.events[eventType](obj, obj.data);
			rerender = true;
		}
		if(rerender)bug.render();
	}
	obj.events = {};
	obj.on = function(cb, eventType){
		if(eventType){
			this.events[eventType] = cb;
		}else{
			this.events['all'] = cb;
		}
	};
	//adding listeners to the views
	for (var i = 0; i < views.length; i++) {
		views[i].listeners.push(obj);
	};
	return obj;
}

bug.render = function(){
	var html = '';
	for (var i = 0; i < bug.view.list.length; i++) {
		html += bug.view.list[i].render();
	};
	$('body').html(html);
}

bug.view.list = [];
bug.data.list = [];
bug.controller.list = [];




