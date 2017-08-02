(function (window, document, navigator) {
//登陆统计visit
//请求统计http
//点击统计event
    var _v_ = {};
    //登陆统计
    _v_.visit = function(){
    	var params = {};
	    //Document对象数据
	    if(document) {
	        params.domain = document.domain || ''; 
	        params.url = document.URL || ''; 
	        params.title = document.title || ''; 
	        params.referrer = document.referrer || '';//上一跳url
	    }   
	    //Window对象数据
	    if(window && window.screen) {
	        params.sh = window.screen.height || 0;
	        params.sw = window.screen.width || 0;
	        params.cd = window.screen.colorDepth || 0;
	    }   
	    //navigator对象数据
	    if(navigator) {
	        params.lang = navigator.language || ''; 
	    }
	    //ua
	    var ua = navigator.userAgent || navigator.vendor || window.opera;
	    var i = ua.indexOf('(')+1, j = ua.indexOf(')');
		params.ua = ua.substring(i, j);
		
		//用户信息是否存在
		//设置用户唯一标识
		
	    //解析_maq配置
	    if(_maq) {
	        for(var i in _maq) {
	            switch(_maq[i][0]) {
	                case '_setAccount':
	                    params.account = _maq[i][1];
	                    break;
	                default:
	                    break;
	            }   
	        }   
	    }   
	    //拼接参数串
	    var args=''; 
	    for(var i in params) {
	        if(args) {
	            args += ';;';
	        }   
	        args += i + '::' + encodeURIComponent(params[i]);
	    }   
	    //通过Image对象请求后端脚本
	    var img = new Image(1, 1); 
	    img.src = 'http://192.168.31.168:8080/uosp-web/jst/_zzw.gif?p=' + args;
    }
    
    //AOP拦截ajax请求
    _v_.http = function(){
		
    }
    
    var fn;
    for(fn in _v_){
    	_v_[fn]()
    }
    
})(window, document, navigator);



/*
响应时间
域名
URL
上一跳url
页面标题
机型
浏览器
分辨率
客户端语言
哪个app

IP
访问时间

访客标识// 给用户起名字，存cookie里


**/
//TODO 解析ua 
//mobile: os vs
//pc: os vs




