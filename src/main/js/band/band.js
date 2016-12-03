const React = require('react');

class Band extends React.Component{
	render() {
		return (
			<tr>
				<td>{this.props.band.name}</td>
			</tr>
		)
	}
}

module.exports = Band;