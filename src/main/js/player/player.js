const React = require('react');

class Player extends React.Component{
	render() {
		return (
			<tr>
				<td>{this.props.player.name}</td>
			</tr>
		)
	}
}

module.exports = Player;
