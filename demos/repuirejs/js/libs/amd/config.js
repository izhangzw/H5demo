require.config({
	baseUrl: 'js',
	paths: {
		//moudles: 'moudles',
		a9: ['moudles/a9'],
		People: ['moudles/People'],
		jquery: ['libs/jquery/jquery'],
		'jquery.tmpl': ['libs/tmpl/jquery.tmpl.min']
	},
	shim: {
		'jquery.tmpl': ['jquery'],
		
		People: {
			init: function(){
				return {
					Loginer: Loginer,
					Person: Person
				}
			}
		}
	}
})

//普通define配置
//第三方配置shim
//jquery引入, 基于jQuery插件的引入