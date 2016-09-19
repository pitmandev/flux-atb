var Boton = React.createClass({
	render: function(){
		return(
			<input type='button' value={this.props.valor} />
		);
	}
});

module.exports = Boton;