//字数限制插件
(function($, window) {
	$.fn.limit = function(maxLength) { 
		var o = this,
		$o = $(this); 
		var _init = function() { 
			var currValue = $o.val(); 
			var left = _left(currValue.length, maxLength); 
			if(left < 0) { 
				currValue = currValue.substring(0, maxLength);
				$o.val(currValue);
				left = 0 
			} 
			$("#counter").html(left);
			_event() 
		};
		var _event = function() { 
			$o.on("input", function() { 
				var currValue = $o.val(); 
				var left = _left(currValue.length, maxLength); 
				if(left < 0) { 
					currValue = currValue.substring(0, maxLength);
					$o.val(currValue);
					left = 0;
					//api.toast({ msg: "不能再多了", duration: 2000, location: "top" }) 
				}
				$("#counter").html(left) 
			})
		}; 
		var _left = function(currValue, maxLength) { 
			return maxLength - currValue 
		};
		_init(); 
		return this 
	}
})($, window);