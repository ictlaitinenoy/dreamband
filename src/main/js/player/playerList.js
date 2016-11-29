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
