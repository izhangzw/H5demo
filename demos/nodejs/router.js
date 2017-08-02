exports.route = function(handle, pathname){
	if(typeof handle[pathname] === 'function')
		handle[pathname]();
	else
		console.log('没有对应路由啊'+pathname)
}
