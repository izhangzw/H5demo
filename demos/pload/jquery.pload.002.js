
(function($, window){
	
	$.fn.pload = function(options, floor){
		floor = floor || 1;
		
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
		var getTmplName = function(str){
			var tmpls = str.split('/'),
			_len = tmpls.length;
			if( _len>floor ){
				
			}
			return floor < 2 ? tmpls[floor - 1] : str.replace(/\//g, '.');
		}
		var readHash = function(){
			var
			hash = window.location.hash.replace('#', ''),//去掉#
			_aHash = hash.split('?'),
			_stmpl = '',
			parameter,//url上面的参数
			ret = {};
			
			_aHash[0] && ( _stmpl = _aHash[0] );
			parameter = _aHash.length>1 ? _aHash[1] : '';
			
			
			ret.tmpl = getTmplName(_stmpl);
			parameter && ( ret.parameter = parameter );
			
			
			console.log(ret)
			return ret;
		}
		var makeURL = function(){
			var
			opt = readHash(),
			tmpl = opt.tmpl || _options.tmpl,
			para = opt.parameter;
			
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