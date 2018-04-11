/**
 * 四处搜集
 * 最后合并数据
 */

/**
[{
	_mau_: 'zhangzw',
	_mat_: [{
		u,//url
		r,//refer
		t,//time
		s //start
	},...]
},...]
平台,系统版本,APP版本,
_mau_=zhangzw;system+version;app1.4.15,_
_mat_=/okr?type=1+10+2132313;/okr/notify+0+213123132
*/


(function(window, u){
	var MA = '_ma_';//本地存储的名字
	var URL = 'http://appdev.mochasoft.com.cn/affogato/api/url?p=';
	var second = 0;
	var account = new Date().toLocaleString().split(' ').shift();
	window.setInterval(function(){
		second++;
	}, 1000);

	var getRefer = function(){
		var referrer = '';
	    try {
	        referrer = window.top.document.referrer;
	    } catch(e) {
	        if(window.parent) {
	            try {
	                referrer = window.parent.document.referrer;
	            } catch(e2) {
	                referrer = '';
	            }
	        }
	    }
	    if(referrer === '') {
	        referrer = document.referrer;
	    }
	    return referrer;
	}
	/**
		概览
		platform	system			version
		
		pc			windows			chrome:59.0.0.1.111
					mac				ie:8
					linux			firefox:51.0.1.1
									safari:13.22
									opera:8.7
		
		mobile		ios				11.2.6
					android			8.0
					windows phone	9.0
		
		
		函数
		get()
		return system:version
	 */
	window.UA = (function(navigator){
		var
		CONSTANTS = {
			IOS: 'ios',
			ANDROID: 'android',
			WINDOWS_PHONE: 'wp',
			WINDOWS: 'win',
			MAC: 'mac',
			LINUX: 'xll',
			IE: 'ie',
			FIREFOX: 'ff',
			OPERA: 'opera',
			SAFARI: 'safari',
			CHROME: 'chrome'
		},
		ua = ( navigator.userAgent || navigator.vendor || window.opera ).toLowerCase(),
		up = navigator.platform.toLowerCase(),
		reg,//根据平台匹配的正则
		vs,//临时变量
		system,//系统类型
		version,//系统版本
		mvr = {//mobile version regs
			ios: /cpu iphone os (.*?) like mac os/i,
			android: /android (.*?);/i,
			wp: /windows phone (.*?) (.*?);/i
		};
		
		
		// System. 
		//mobile
		system = 
				/ipad|ipod|iphone/i.test(ua) 	? CONSTANTS.IOS : (
				/android/i.test(ua)			? CONSTANTS.ANDROID : (
				/windows phone/i.test(ua) 	? CONSTANTS.WINDOWS_PHONE : undefined
			)
		);
		//PC
		if(!system){
			system=
			up.indexOf('win') === 0 ? CONSTANTS.WINDOWS : (
			up.indexOf('mac') === 0 ? CONSTANTS.MAC : (
				(up == 'x11') || (up.indexOf('linux') === 0) ? CONSTANTS.LINUX : up
			)
			)
		}
		
		// Version. 
		reg = mvr[system];
		if(reg){
			//mobile
			version = ua.match(reg).pop();
			
			if(version.indexOf('_')!==-1) version = version.replace(/_/g, '.')
		}else{
			//PC
			version = 
			( vs = ua.match(/msie ([\d.]+)/) ) ? CONSTANTS.IE + vs[1] :
			(	   ua.match(/trident\/([\d.]+)/) ) ? CONSTANTS.IE + ua.match(/rv:([\d.]+)/)[1] : //IE11
			( vs = ua.match(/firefox\/([\d.]+)/) ) ? CONSTANTS.FIREFOX + vs[1] :
			( vs = ua.match(/version\/([\d.]+).*safari/) ) ? CONSTANTS.SAFARI + vs[1] : 
			( vs = ua.match(/opera.([\d.]+)/) || ua.match(/opr.([\d.]+)/) ) ? CONSTANTS.OPERA + vs[1] :
			( vs = ua.match(/chrome\/([\d.]+)/) ) ? CONSTANTS.CHROME + vs[1] : 0;
		}
		
		return {
			get: function(){
				return system +':'+version;
			}
		}
	})(navigator);
	
	//停留时间
	/**
	 * 进入页面：onload
	 * 离开页面：onbeforeunload --> onunload
	 * 刷新页面：onbeforeunload --> onunload --> onload
	 */
	window.Track = (function(window){
		var start = function(){console.log('start')
			var trackers = JSON.parse( localStorage[MA] || '[]' );
			var tracker = null;
			var newTrack = function(){
				return window.location.hash.replace(/#/g, '')+'+'+ +new Date()
			}
			var newTracker = function(){
				tracker = {
					_mau_: account,
					_mat_: [newTrack()]
				}
				trackers.push(tracker)
			}
			if(trackers.length){
				tracker = trackers.find(function(v){
					return v._mau_ === account;
				})
				//老用户, 追加轨迹
				if(tracker)
					tracker._mat_.push(newTrack())
				//新面孔,创建轨迹
				else
					newTracker();
			}else{
				//新面孔,创建轨迹
				newTracker();
			}
			localStorage[MA] = JSON.stringify(trackers)
		};
		var end = function(){console.log('end')
			var trackers = JSON.parse( localStorage[MA] || '[]' );
			var tracker = trackers.find(function(v){
				return v._mau_ === account;
			})
			//保存停留时间
			var track;
			if(tracker){
				var index = tracker._mat_.length-1;
				var thisTrack = tracker._mat_;
				thisTrack[index] = thisTrack[index] + '+' + second;
			}
			var datas = JSON.stringify(trackers);
			//更新本地存储
			localStorage[MA] = datas;
			//满足条件汇报
			if(datas.length>1024){
				window.Track.report()
			}else{
			}
			console.log(JSON.parse(datas), datas)
		};
		
		return {
			//配置参数
			config: function(options){},
			//开始记录
			start: start,
			//结束记录
			end: end,
			//发送
			report: function(){
				var
				img = new Image(1, 1),
				rnd_id = '_img_'+Math.random(),
				datas = localStorage[MA];
				
				localStorage[MA] = '';
				console.log('--',JSON.parse(datas))
				var stringify = function(trackers){
					var ret = '';
					
					for(var tracker of trackers){
						for(var k in tracker){
							if(tracker.hasOwnProperty(k)){
								if(typeof tracker[k] !== 'object'){
									ret += (k+'='+tracker[k] + ',_');
								}else{
									ret += (k+'='+tracker[k].join(';')+';;')
								}
							}
						}
					}
					return ret
				}
				
				//在全局变量中引用img, 防止img被垃圾回收机制过早回收造成请求失败
				window[rnd_id] = img;
				img.onload=img.onerror=img.onabort=function(){
					img.onload = null;
					img.onerror = null;
					img.onabort = null;
					img = null;
					window[rnd_id] = null;
				}
				stringify(JSON.parse(datas))
				if(datas)
					img.src = URL + datas;
				//console.log(URL + datas, img, datas)
			}
		}
	})(window);
	
	//
	
	window.onhashchange = function(){
		var t = window.Track;
		if (t) t.end();
		
		second = 0;
	}
	window.onload = function(){
		console.log('load')
	}
	window.onunload = function(){
		console.log('unload')
	}
	window.onbeforeunload = function(){
		console.log('beforeunload')
	}
	
	window.addEventListener('set.params', function(e, data){
		_maq.push(['_mau_', data]);
	})
})(window, navigator);