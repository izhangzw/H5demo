### 关于 `typeof` 和 `instanceof`
[MDN instanceof](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/instanceof)

检测类型
- 确定一个值是哪种基本类型可以用typeof操作符
- 而确定一个值是哪种引用类型可以使用instanceof操作符

```
	var
	a = typeof null,		//object
	b = typeof [],			//object -- instanceof Array
	c = typeof undefined,	//undefined
	d = typeof '',			//string
	e = typeof NaN;			//number
	f = typeof function a(){}//function
```

### prototype

### 1.9.1之后的版本不支持IE8和IE8以下

### call & apply

- `apply(this, arguments)` 在调用apply方法的时候第一个参数是对象(this)，第二个参数是一个数组集合
- `call(this, name, age)`

* call & apply 都可以改变this指向;
* call & apply 的区别是传参的格式,
apply是arguments对象作为参数，而call则是要把需要传的参数一一列出.


### 基本类型 & 引用类型
基本类型：Undefined, Null, Number, Boolean, String
引用类型：Object, Date, Array, RegExp, Function

### 栈、堆存储
- 基本类型值在内存中占据固定大小的空间,因此被保存在栈内存中;
- 引用类型的值是对象, 保存在堆内存中. 包含引用类型的变量实际上包含的并不是对象本身, 而是一个指向改对象的指针

### 复制
- 从一个变量向另一个变量复制基本类型的值, 会创建这个值的一个副本
- 从一个变量向另一个变量复制引用类型的值, 复制的其实是指针,　因此两个变量最终都指向同一个对象


### 其他
* 监听键盘一直用 keyup  e.keyCode === 13
* URL最长不要超过2000字符. 手机 pc一样.小于2000不会有问题
* 一天的毫秒值 864E5