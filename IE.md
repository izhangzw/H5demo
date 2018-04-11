# IE浏览器之我踩过的坑(持续更新...)

### 兼容IE8透明度css写法
```css
{
  background:#000;
  opacity: 0;
  filter: progid:DXImageTransform.Microsoft.Alpha(opacity=0);
}
```

### IE8没有console对象, 防止漏删报错可加入代码
```javascript
window.console = window.console || (function () {
  var c = {}; c.log = c.warn = c.debug = c.info = c.error = c.time = c.dir = c.profile
  = c.clear = c.exception = c.trace = c.assert = function () { };
  return c;
})();
```

### IE8没有JSON对象
需要引入[json3.min.js](http://cdnjs.cloudflare.com/ajax/libs/json3/3.3.2/json3.js, '源码')

### IE8不支持响应式(即 Media Query)
需要引入[Respond.js](http://www.bootcdn.cn/respond.js/, '不同版本下载地址')
  
### location.origin未实现
使用` window.location.protocol +'//'+ window.location.host + window.location.pathname `代替

### 注意结束标签
label标签不能写成<label/> , 只能<label></label>

### cookie
设置的 **失效时间** 是有上限的, 目前不确定上限是多少, 但是2年内肯定没事(864E5 * 365 * 2)

### Date
new Date('2017/08/31') 参数中分隔符必须为\" **/** \" IE8才能解析成Date, 有/的话,有没有0无所谓

### 在IE8浏览器中，会因为host地址与#之间没斜杠而访问错误
http://192.168.29.203:8080/website **/** #home