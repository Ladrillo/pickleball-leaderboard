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


export const calculateColor = (props, challengeables) => {
    let color;
    let me         = calculateMe(props);
    let myOpponent = calculateMyOpponent(props);

    if (props.player._id === me._id && !me.stats.locked.id) color = 'green';
    else if (props.player._id === me._id && me.stats.locked.id ) color = 'red';
    else if (!me.stats.locked.id && challengeables.indexOf(props.player._id) > -1) color = 'yellow';
    else if (myOpponent && props.player._id === myOpponent._id) color = 'red';
    else color = 'blue';

    return color;
};