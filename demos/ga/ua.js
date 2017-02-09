
(function (ua) {
	ua = ua.toLowerCase();
	var
	isIpad = ua.match(/ipad/i) == "ipad",
	isIphone = ua.match(/iphone os/i) == "iphone os",
	isAndroid = ua.match(/android/i) == "android",
	isMidp = ua.match(/midp/i) == "midp",
	isUc7 = ua.match(/rv:1.2.3.4/i) == "rv:1.2.3.4",
	isUc = ua.match(/ucweb/i) == "ucweb",
	isCE = ua.match(/windows ce/i) == "windows ce",
	isWM = ua.match(/windows mobile/i) == "windows mobile";
	
	var isMoblie = isIpad || isIphone || isAndroid || isMidp || isUc7 || isUc || isCE || isWM;
	
	var
		i = ua.indexOf('(')+1,
		j = ua.indexOf(')');
		var info = ua.substring(i, j)

	if(isMoblie){
		//phone
		//os ? vs
		console.info('moblie')
		if(isAndroid){
			info.split(';')[1].trim()
		}else if(isIphone){
			
		}
	}else{
		//pc
		/*window ? bit64 ?*/
	}
		console.log(info)
})(navigator.userAgent || navigator.vendor || window.opera);

(function(){
	Util = {}
	Util.navigator = {
		OS: {ios: 'ios',android: 'android',other: 'other'},
		ua: navigator.userAgent.toLowerCase(),
		isWX: function(){
			if(this.ua.match(/MicroMessenger/i)=='micromessenger')
				return true
			else
				return false
		},
		isDD: function(){
			if(this.ua.match(/dingtalk/i)=='dingtalk')
				return true
			else
				return false
		},
		isMinXing: function(){
			if(this.ua.match(/minxingmessenger/i)=='minxingmessenger')
				return true
			else
				return false
		},
		detectOS: function(){
			var os = this.OS;
			var us = this.ua;
			if ( /android/i.test(us) ){
				return os.android;
			}else if ( /ipad|iphone/i.test(us) ){
				return os.ios;
			}else{
				return os.other;
			}
		},
		isPhone: function(){
			var p = navigator.platform.toLowerCase()
			return !(p.indexOf('win') == 0 || 
			p.indexOf('mac') == 0 || 
			p.indexOf('x11') == 0 || 
			p.indexOf('linux') == 0)
		}
	};
	
	var OS = { IE: 'ie', FF: 'firefox', SAFARI: 'safari', OPERA: 'opera', GG: 'chrome'};
	var browser = function(){
		var os = { name:'', version:'' };
		var ua=navigator.userAgent.toLowerCase();
		
		var 
		isIE = /msie/.test(ua) || /trident/.test(ua),// IE特有属性：window.ActiveXObject; 但是IE11不知道为什么不可以. 艹
		isOpera = window.opera || window.opr,// /opera/.test(ua) || /opr/.test(ua)
		isSafari = /version\/([\d.]+).*safari/.test(ua),
		isFF = /firefox/.test(ua);
		//var isChrome = /google/.test(navigator.vendor.toLowerCase());
		
		// 浏览器名
		os.name = 
		( isIE ) ? OS.IE :
		( isFF ) ? OS.FF :
		( isSafari ) ? OS.SAFARI :
		( isOpera ) ? OS.OPERA : OS.GG;
		
		//浏览器版本号
		var vs;
		os.version = 
		( vs = ua.match(/msie ([\d.]+)/) ) ? vs[1] :
		(	   ua.match(/trident\/([\d.]+)/) ) ? ua.match(/rv:([\d.]+)/)[1] : //IE11
		( vs = ua.match(/firefox\/([\d.]+)/) ) ? vs[1] :
		( vs = ua.match(/version\/([\d.]+).*safari/) ) ? vs[1] : 
		( vs = ua.match(/opera.([\d.]+)/) || ua.match(/opr.([\d.]+)/) ) ? vs[1] :
		( vs = ua.match(/chrome\/([\d.]+)/) ) ? vs[1] : 0;

		return os;
	}
	window.browser = browser;
}());
