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

ReactDOM.render(
		<App />,
		document.getElementById('react'))