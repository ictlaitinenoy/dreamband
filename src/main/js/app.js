const React = require('react');
const ReactDOM = require('react-dom')
const client = require('./client');

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {bands: []};
	}

	componentDidMount() {
		client({method: 'GET', path: 'api/bands'}).done(response => {
			this.setState({bands: response.entity._embedded.bands});
		});
	}

	render() {
		return (
			<BandList bands={this.state.bands}/>
		)
	}
}

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

class Band extends React.Component{
	render() {
		return (
			<tr>
				<td>{this.props.band.name}</td>
			</tr>
		)
	}
}

ReactDOM.render(
		<App />,
		document.getElementById('react'))