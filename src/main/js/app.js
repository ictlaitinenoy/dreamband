const React = require('react');
const ReactDOM = require('react-dom')
const client = require('./client');
var BandList = require('./band/bandList');
var PlayerList = require('./player/playerList');

const follow = require('./follow'); // function to hop multiple links by "rel"
const root = 'api';

export default class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
				bands: [],
				players: [],
				bandPageSize : 1,
				playerPageSize : 5
		};
	}

	loadBandsFromServer(pageSize) {
		follow(client, root, [
			{rel: 'bands', params: {size: pageSize}}]
		).then(bandCollection => {
			return client({
				method : 'GET',
				path : bandCollection.entity._links.profile.href,
				headers : {'Accept': 'application/schema+json'}
			}).then(schema => {
				this.schema = schema.entity;
				return bandCollection;
			});
		}).done(bandCollection => {
			this.setState({
				bands: bandCollection.entity._embedded.bands,
				attributes : Object.keys(this.schema.properties),
				pageSize : pageSize,
				links: bandCollection.entity._links
			});
		});
	}
	
	loadPlayersFromServer(pageSize) {
		follow(client, root, [
			{rel: 'players', params: {size: pageSize}}]
		).then(playerCollection => {
			return client({
				method : 'GET',
				path : playerCollection.entity._links.profile.href,
				headers : {'Accept': 'application/schema+json'}
			}).then(schema => {
				this.schema = schema.entity;
				return playerCollection;
			});
		}).done(playerCollection => {
			this.setState({
				players: playerCollection.entity._embedded.players,
				attributes : Object.keys(this.schema.properties),
				pageSize : pageSize,
				links: playerCollection.entity._links
			});
		});
	}
	
	componentDidMount() {
		this.loadBandsFromServer(this.state.bandPageSize);
		this.loadPlayersFromServer(this.state.playerPageSize);
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