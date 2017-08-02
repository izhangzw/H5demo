function Subject(){
	this.observers = {};
	var _observers = this.observers;
	return {
		addObserver: function(key, fn){
			var fns = _observers[key],
			i, _len, 
			_index = -1;//fn所在数组索引
			if(!fns){
				_observers[key] = []
			}
			//数组去重
			//匿名函数可以重复添加,
			//同名函数覆盖
			if(fns&&fns.length){
				for(i=0, _len=fns.length; i<_len; i++){
					if(fn.name && fns[i].name===fn.name){
						_index = i;
					}
				}
			}
			if(_index === -1)
				_observers[key].push(fn)
			else
				_observers[key][_index] = fn
		},
		/**
		 * 删除观察者下fn
		 * @param {String}   key 观察者名字
		 * @param {function} fn  需要删除的fn | 不传fn - 清除所有
		 */
		removeObserver: function(key, fn){
			var fns = _observers[key],
			i,_len;
			//未找到对应观察者
			if(!fns) return
			//清除观察者key
			if(!fn){
				fns &&( fns.length=0 )
			}else{
				for(i=0, _len=fns.length; i<_len; i++){
					if(fns[i]===fn)
						fns.splice(i, 1)
				}
			}
		},
		trigger: function(){
			var key = Array.prototype.shift.call(arguments)
			var fns = _observers[key],
			i,_len;
			if(!fns || fns.length===0) return
			
			for(i=0, _len=fns.length; i<_len; i++){
				fns[i].apply(this, arguments)
			}
		}
	}
}

var login = new Subject()
var person = new Subject()

login.addObserver('succ', function(){
	console.log('logins')
})
person.addObserver('succ', function(){
	console.log('persons')
})

login.trigger('succ')
person.trigger('succ')
//var fuck1 = function(v){
//	console.log('fuck1',v)
//}
//var fuck2 = function(){
//	console.log('fuck2')
//}
//subject.addObserver('fuck', fuck2)
//subject.addObserver('fuck', fuck1)
//subject.addObserver('fuck', function(data){
//	console.log('fuck0', data)
//})
//subject.addObserver('fuck', function(){
//	console.log('fuck00')
//})
//subject.trigger('fuck', {name: 1})

//[OK] 如何传参