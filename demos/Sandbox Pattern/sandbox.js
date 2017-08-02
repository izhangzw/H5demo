
function Sandbox() {
	var args = Array.prototype.slice.call(arguments),
		callback = args.pop(),
		//兼容数组和字符串参数
		modules = (args[0] && typeof args[0] === "string") ? args : args[0],
		i;
	if(!(this instanceof Sandbox)) {
		return new Sandbox(modules, callback)
	}
	
	this.a = 1;
	this.b = 2;
	
	if(!modules || modules === "*") {
		modules = [];
		for(i in Sandbox.modules) {
			if(Sandbox.modules.hasOwnProperty(i)) {
				modules.push(i)
			}
		}
	}
	//加载模块绑定函数们到this上
	for(i = 0; i < modules.length; i += 1) {
		Sandbox.modules[modules[i]](this)
	}
	//执行回调, 这时候回调的参数里面已经包含了this的属性和模块的方法
	callback(this);
	
	Sandbox.prototype = {
		name: "My Applocation",
		version: "1.0.0",
		getName: function() {
			return this.name
		}
	}
};
Sandbox.modules = {}
Sandbox.modules.consoles = function(box){
	box.a = 3;
	box.log = function(s){
		console.log(s)
	}
}
Sandbox.modules.ajax = function(box){
	box.ajax = function(params){
		
	}
}
Sandbox('consoles', 'ajax', function(box){
	
})
console.log(Sandbox.prototype)