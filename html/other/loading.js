~ function() {
	var A = 15;
	var C = 2;
	var B = {
		show: function(D) {
			var I = "data:image/png;base64,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",
				H = "努力加载中...",
				G = "",
				F = "";
			if(D) {
				I = "data:image/png;base64,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";
				H = "抱歉，系统小忙，请再尝试";
				G = 'onclick="javascript:location.reload()"';
				F = '<div class="loading-txt" style="margin:12px 0px;color:#999;font-size:12px;"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAANwAAADcBYx2BhQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAGSSURBVDiNpVM9SxxRFD3nzaCmULAwEGEDW1j4IxQEmdFdCxF23bTpbBRBtNw6EBt/gaDFjgPRIutjHgtOq2AjgRQhKWJpo4KI7u67FjrD6o6KeLr7cQ73Hu6liOA9UC8Va8bkwkbjc2dOa90bx7GbxHw6wa4xH2+t/U7AB9ALgABuAETtVmvZcd0lkOdl31/vmiDQ2mta+4vApVg7Vp6aGvx9eDjYJicAXDiuewJgAiL9CScdJdR6iOSWKPV13vN+JvlqtSqbcfz3w/X1Eck8gAKARpcHAnwDEHaSEwxcXQ2TnCXQBLlnrU173I6+glg7nmXmXLH4D8BcVk0B926D7JsvFP5kNT3Fjyj61LXCW9ASOa4Zk0sFKp53CuAm2N8feY0c1OujAOSB88jEiEotviZAx1kQwCRxKtCj1AqAcmDMzHPkMIqKAEo9Sq2lgp2XGGjtkdwGsCPWbjyYKqExedtuL5H8ArJS9v2DTAEg45RJgUhTgLoSWS1NT589Wumlb6wZk3OUYmly8v+znrz3ne8AQ1ajfDAaG64AAAAASUVORK5CYII=" align="absmiddle"/> 点击页面，重新加载</div>'
			}
			var E = "<div " + G + ' id="loadingWrapper" style="position:fixed;top:0;bottom:0;left:0;right:0;background:#FFF;font-size:14px;color:#222222;text-align:center;z-index:99999"><div><img style="margin:136px 0px 0px;width:78px;height:auto;" src="' + I + '"/></div><div style="margin:12px 0px;">' + H + "</div>" + F + "</div>";
			jQuery("html").append(E)
		},
		remove: function() {
			if(jQuery("#loadingWrapper").length) {
				jQuery("#loadingWrapper").remove()
			}
		}
	};
	Loading = {
		pageTimer: "",
		stop: false,
		show: function(D) {
			B.show(D);
			window.clearInterval(Loading.pageTimer);
			Loading.pageTimer = window.setInterval(function() {
				A--;
				if(A < 1) {
					Loading.stop = true;
					B.remove();
					B.show("error");
					window.clearInterval(Loading.pageTimer)
				}
			}, 1000)
		},
		remove: function() {
			window.clearInterval(Loading.pageTimer);
			B.remove()
		}
	};
	Loading.show();
	document.onreadystatechange = function() {
		if( !document.readyState || document.readyState == "loaded" || document.readyState == "interactive" || document.readyState == "complete" ) {
			setTimeout(function() {
				if(!Loading.stop) {
					Loading.remove()
				}
			}, C * 1000)
		}
	}
}();