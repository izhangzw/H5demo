/**
 * 自定义事件
 */
(function(){
	/**
	 * listener = {
	 *	click: [fn,fn,..],
	 *  custom: [fn],
	 *  ....
	 * }
	 */
	window.CustomEvent = (()=>{
		const listener = {};
		return {
			listen(type, fn){
				if(!listener[type])
					listener[type] = []
				if(typeof fn === 'function')
					listener[type].push(fn)
				
				return this;
			},
			remove(type, fn){
				const e = listener[type];
				if(e&&e.length){
					const index = e.findIndex((v)=>{
						return v===fn
					});
					e.splice(index, 1)
				}
				
				return this;
			},
			fire(type, args){
				const e = listener[type];
				if(e){
					for(let fn of e){
						fn(type, args)
					}
				}else{
					console.log(type)
				}
				return this;
			}
		}
	})();
})();
