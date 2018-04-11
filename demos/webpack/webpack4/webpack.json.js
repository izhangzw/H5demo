module.exports = {
	//https://doc.webpack-china.org/configuration/devtool/#src/components/Sidebar/Sidebar.jsx
	devtool: 'eval-source-map',//生成source map
//	entry: __dirname + '/app/main.js',
//	output: {
//		path: __dirname + '/public',
//		filename: 'bundle.js'
//	},
	
	//https://link.jianshu.com/?t=https://webpack.js.org/configuration/dev-server/
	devServer: {
		contentBase: './dist',//监听目录
		historyApiFallback: true,//不跳转
		inline: true//实时刷新
	}
}
