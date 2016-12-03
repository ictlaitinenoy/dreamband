const React = require('react');
var Band = require('./band');

class BandList extends React.Component{
	render() {
		var bands = this.props.bands.map(band =>
			<Band key={band._links.self.href} band={band}/>
		);
		return (
			<table>
				<tbody>
					<tr>
						<th>Name</th>
					</tr>
					{bands}
				</tbody>
			</table>
		)
	}
}

module.exports = BandList;