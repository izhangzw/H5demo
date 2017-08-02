
(function($, window){
	$.pload = {};
	$.pload.config = {
		'a/a': 'a'
	}
	$.fn.pload = function(options){
		
		var _default = {
			ctx: './',
			suff: '.html',
			tmpl: 'a'
		}
		
		var _options = $.extend({}, _default, options);
		
		var
		_this = this,
		$this = $(this);
		
		var loadAfter = function(rep,status,xhr){
			var fn = _options.callback;
			if(status==='success'){
				//TODO do something after success
				fire($this, 'pload:succ')
				if(fn) fn()
			}else{
				fire($this, 'pload:fail')
				$this.html(xhr.responseText+'<h3>('+xhr.status+')</h3>')
			}
			
			fire($this, 'pload:end')
		}
		var load = function(){
			fire($this, 'pload:start')
			$this.load(makeURL(), loadAfter)
		}
		/**
		 * 解析Hash
		 * 
		 * return {
		 * 	[tmpl]
		 * 	[tmpl2nd]
		 * 	[parameter]
		 * }
		 */
		var readHash = function(){
			var
			hash = location.hash.replace('#', ''),//去掉#
			_aHash = hash.split('?'),
			tmpl = '',
			parameter,//url上面的参数
			ret = {};
			
			_aHash[0] && ( tmpl = _aHash[0] );
			parameter = _aHash.length>1 ? _aHash[1] : '';
			
			var i = tmpl.indexOf('/');
			var has2nd = i != -1;
			var tmpl1st,tmpl2nd;
			
			if(has2nd){
				tmpl1st = tmpl.substring(0, i)
				tmpl2nd = tmpl.substring(i, tmpl.length)
			}else{
				tmpl1st = tmpl;
				tmpl2nd = '';
			}
			
			tmpl && ( ret.tmpl = tmpl1st );
			tmpl2nd && ( ret.tmpl2nd = tmpl2nd );
			parameter && ( ret.parameter = parameter );
			return ret;
		}
		var makeURL = function(){
			var
			opt = readHash(),
			tmpl = opt.tmpl || _options.tmpl,
			para = opt.parameter;
			console.log(opt)
			var url = _options.ctx + tmpl + _options.suff;
			if(para) url += ('?'+para);
			return url;
		}
		
		
		var callbacks = {
			start: function(){
				if(!$('.loading').length) $this.after('<p class="loading"></p>')
				
				$('.loading').html('loading....')
			},
			succ: function(){
				var e = Array.prototype.shift.call(arguments)
				var args = arguments[0];
			},
			fail: function(){
				
			},
			end: function(){
				$('.loading').html('ok')
			}
		};
		var listen = function(target, type, fn){
			target.on(type, fn)
		}
		var fire = function(target, type, args){
			var e = $.Event(type, args)
			$(target).trigger(e, args);
		}
		
		var init = function(){
			
			//events
			window.onhashchange = load
			window.onload = load
			//callbacks
			listen($this, 'pload:start', callbacks.start)
			listen($this, 'pload:succ', callbacks.succ)
			listen($this, 'pload:fail', callbacks.fail)
			listen($this, 'pload:end', callbacks.end)
		}
		init()
	}
	
})($, window)