requirejs.config({
	baseUrl: 'js',
	paths: {
		moudles: 'moudles',
		a9: 'moudles/a9',
		People: 'moudles/People'
	},
	shim: {
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

