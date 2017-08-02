import http from 'http';
import url from 'url';

exports.start = function(router,handle){
	http.createServer(function(req, rep){
		var pathname = url.parse(req.url).pathname;
		
		router(handle, pathname);
		
		rep.writeHead(200, {'Content-Type': 'text/plain'});
		rep.write('hello world');
		rep.end()
	}).listen(8888);
	console.log('服务启动监听8888')
};