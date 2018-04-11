import Nerv from 'nervjs'

class Header extends Nerv.component {
	constructor(){
		super(...arguments)
	}
	
	render(){
		return (
			<div class="row caption">
				<div class="col-md-4">
					<img width="150" height="40" src="img/logo.jpg" alt="LOGO" style="border: 1px solid #1B6D85;margin-top: 10px;margin-left: 48px;"/>
				</div>
				<div class="col-md-8"></div>
			</div>
		)
	}
}

export default Header