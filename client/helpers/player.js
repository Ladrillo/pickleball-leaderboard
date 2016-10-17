export const calculateMe = props => {
    return props.players.find(pl => pl._id === props.authedPlayerId);
};


export const calculateMyOpponent = props => {
    const me = calculateMe(props);
    return props.players.find(pl => pl.stats.locked.id === me._id);
};


export const calculatePlayerOpponent = (players, player) => {
    return players.find(pl => pl.stats.locked.id === player._id);
};