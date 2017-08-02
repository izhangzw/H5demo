var server = require('./server');
var router = require('./router');
var reqhandle = require('./reqHandle');

var handle = {};
handle['/'] = reqhandle.home;
handle['/home'] = reqhandle.home;
handle['/mine'] = reqhandle.mine;


server.start(router.route, handle)

//TODO 支持ES6语法