const React = require('react');
const ReactDOM = require('react-dom')
const client = require('./client');

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
				bands: [],
				players: []
		};
	}

	componentDidMount() {
		client({method: 'GET', path: 'api/bands'}).done(response => {
			this.setState({bands: response.entity._embedded.bands});
		});
		client({method: 'GET', path: 'api/players'}).done(response => {
			this.setState({players: response.entity._embedded.players});
		});
	}

	render() {
		return (
			<div>
				<BandList bands={this.state.bands}/>
				<PlayerList players={this.state.players}/>
			</div>
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

class PlayerList extends React.Component{
	render() {
		var players = this.props.players.map(player =>
			<Player key={player._links.self.href} player={player}/>
		);
		return (
			<table>
				<tbody>
					<tr>
						<th>Name</th>
					</tr>
					{players}
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

class Player extends React.Component{
	render() {
		return (
			<tr>
				<td>{this.props.player.name}</td>
			</tr>
		)
	}
}

ReactDOM.render(
		<App />,
		document.getElementById('react'))