var observer = {
	name : "ismail",
	on : function(event){this.callbacks[event](this);},
	callbacks: []
}

var observable = {
	emit : function(event, callback){
		this.subscribers.forEach(function(sub){sub.on(event)});
		callback();
	},
	subscribers : []
}

observer.callbacks['hello'] = function(o){ console.log(o.name+' says hello') };

var observer2 = Object.create(observer);
observer2.name = "Med";


observable.subscribers.push(observer);
observable.subscribers.push(observer2);

observable.emit('hello');

