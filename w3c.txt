HTML
> 使用小写字母书写所有的元素和属性
> 属性名称必须小写,必须加引号,不能简写.<input type="checkbox" checked="checked" />
> 关闭所有的标签
> 使用空格和斜线关闭空标签.<img alt="图片提示" /><br />
> 不要在注释中写双下划线
> 引入css或js时,须略去默认类型声明.
> head标签内引入css文件,有助于页面渲染
> 页脚引入js文件
> 书写链接地址时,避免重定向,需在地址后面加‘/’.<a href="http://www.baidu.com/"></a>
> 尽可能减少div嵌套
	根据重要性使用h1-6标签,
	段落使用p,
	列表使用ul,
	内联元素中不可嵌套块级元素
	为含有描述性表单元素（input,tetarea）添加label .<p><label for="name">姓名: </label><input type="text" id="name" /></p>
> 能以背景形式呈现的图片,尽量写入css样式中
> 重要图片必须加上alt属性,给重要的元素和截断的元素加上title

CSS

1. 页面内部尽量避免使用行内样式, 即style=""
2. class与id的使用
	id:具有唯一性,是父级的,用于标识页面上的特定元素,如header/footer/wrapper/left/right之类
	class:可以重复使用,是子级的,可用于页面上任意多个元素
3. 命名：以小写英文字母、数字、下划线组合命名,避免使用中文拼音,尽量使用简易的单词组合,避免使用拼音,采用驼峰命名法和划线命名法,提高可读性,如：sub_nav_menu、drop-menu、dropMenu等
4. 缩进：统一使用tab进行缩进
5. 书写顺序规则
	定位属性（比如：display, position, float, clear, visibility, table-layout等）
	自身属性（比如：width, height, margin, padding, border等）
	文本属性（比如：font, line-height, text-align, text-indent, vertical-align等）
	其他属性（比如：color, background, opacity, cursor,content, list-style, quotes等）
6. 样式表中中文字体名,最好转成unicode码,以避免编码错误时乱码。
7. 减少影响性能的属性,如：position,float
8. 为大区块样式添加注释,小区块适量注释。
9. 细节
	禁止在 css 中使用*选择符。 
	除非必须,否则,一般有 class 或 id 的,不需要再写上元素对应的 tag。
	0后面不需要单位,比如 0px 可以省略成 0,0.8px 可以省略成.8px
	如果是 16 进制表示颜色,则颜色取值应该大写 (#FFFFFF)
	如果可以,颜色尽量用三位字符表示,例如#AABBCC 写成#ABC
	如果没有边框时,不要写成 border:0,应该写成 border:none
	background、font 等可以缩写的属性,尽量使用缩写形式


JS

> 每行代码结束必须有分号;.var a = 1;
> 驼峰式命名
> jQuery 变量要求首字符为‘$’. $obj
> 类命名：首字母大写,驼峰式命名
> 函数命名：首字母小写,驼峰式命名
> 后期优化中,JavaScript 非注释类中文字符须转换成 unicode 编码使用,以避免编码错误时乱码显示;
> 多写注释

解耦：
html与JS解耦. 比如onclick事件通过, js来添加: $('#id').click();


照片
张再旺
前端开发攻城狮

