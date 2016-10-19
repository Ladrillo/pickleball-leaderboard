import React from 'react';

const lockedStyle = {
    textShadow: '1px 1px 2px black, 0 0 1em blue, 0 0 0.2em',
    fontFamily: 'Creepster',
    textAlign: 'center',
    color: '#5213D4',
    fontSize: 32
};


const Status = props => {

    if (props.player.stats.locked.id) {
        return (<p style={lockedStyle}>Locked in combat!</p>);
    }
    return null;
};


export default Status;