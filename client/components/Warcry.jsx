import React from 'react';


const challengeStyle = {
    fontFamily: 'Luckiest Guy',
    color: '#5213D4',
    textAlign: 'center',
    fontSize: 24
};



const Warcry = props => {

    const potentialVictim = (
        !props.me.stats.locked.id &&
        !props.player.stats.locked.id &&
        props.isChallengeable
    );

    if (potentialVictim) {
        return (
            <div
                style   = { challengeStyle }
                onClick = { () => props.challengeHandler(props.me, props.player) }>
                challenge {props.player.displayName.split(' ')[0]}!
            </div>
        );
    }
    return null;
};


export default Warcry;