
//Polyfill
Promise.prototype.done = function (onFulfilled, onRejected) {
  this.then(onFulfilled, onRejected)
    .catch(function (reason) {
      // 抛出一个全局错误
      setTimeout(() => { throw reason }, 0);
    });
};
Promise.prototype.finally = function (callback) {
  let P = this.constructor;
  return this.then(
    value  => P.resolve(callback()).then(() => value),
    reason => P.resolve(callback()).then(() => { throw reason })
  );
};

const ajax = function(url, {
	data,
	type='GET',
	dataType='json',
	async=true,
	cache=false,
	headers={'Content-type': 'application/json'},
//	success,
//	error,
//	complete
}={}){
	
	return Promise.resolve(
		$.ajax(url, {
			data,
			type,
			dataType,
			async,
			cache,
			headers,
		})
	)
}