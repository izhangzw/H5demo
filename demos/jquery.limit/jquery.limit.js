/**
 * $('textarea').limit(300)
 * 
 * 监听回车事件等 通常使用keyUp
 * e.ctrlKey && e.keyCode
 */
(function($, window) {
    $.fn.limit = function(maxLength) {
        var
        o = this, $o = $(this);
        var _init,_event,_left,fixIE9;
        
        _init = function() {
            var currValue = $o.val();
            var left = _left(currValue.length, maxLength);
            if (left < 0) {
                currValue = currValue.substring(0, maxLength);
                $o.val(currValue);
                left = 0
            }
            $o.after('<span class="limit">' + left + "/" + maxLength + "</span>");
            _event()
        };
        _event = function() {
            $o
            .on('contextmenu', function(){return false;})//禁止鼠标右键
            .on("keyup mouseup", function(e){
                var currValue = $o.val();
                var left = _left(currValue.length, maxLength);
                if (left < 0) {
                    currValue = currValue.substring(0, maxLength);
                    $o.val(currValue);
                    left = 0;
                    alert("不能再多了");
                }
                $o.next(".limit").html(left + "/" + maxLength)
            })
            //IE9
            //fixIE9()
        };
        _left = function(currValue, maxLength) {
            return maxLength - currValue
        };
        /*fixIE9= function(){
        	var vs = ( vs = navigator.userAgent.toLowerCase().match(/msie ([\d.]+)/) ) ? vs[1] : 0;
            if(vs && vs.indexOf('9.')!=-1){
				$o.on('keyup', function(e){
					//8: BackSpace; 46: Delete
					if(e.keyCode === 8 || e.keyCode === 46)
						//删除--触发
						$o.trigger('upt'); 
					else if(e.ctrlKey && e.keyCode === 88)
						//剪切--触发
						$o.trigger('upt');
					else if(e.ctrlKey && e.keyCode === 90)
						//回退--触发
						$o.trigger('upt');
				});
			}
        }*/
        _init();
        return this;
    }
})($, window);