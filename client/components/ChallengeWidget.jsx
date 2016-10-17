import React from 'react';

import { getChallengeables } from '../helpers/sorting';


const ChallengeWidget = props => {

    const { challengeHandler, unchallengeHandler } =  props;
    const { player, me, authedPlayerId, isChallengeable, myOpponentId, isMe } = props;

    const lockedStyle = {
        textShadow: '1px 1px 2px black, 0 0 1em blue, 0 0 0.2em',
        fontFamily: 'Creepster',
        textAlign: 'center',
        color: '#7141B7',
        fontSize: 32
    };

    const unlockButtonStyle = {
        fontFamily: 'Luckiest Guy',
        color: '#5213D4',
        fontSize: 24
    };

    const challengeStyle = {
        fontFamily: 'Luckiest Guy',
        color: '#5213D4',
        textAlign: 'center',
        fontSize: 24
    };

    const unlockButtonParentStyle = {
        display: 'flex',
        justifyContent: 'space-around'
    };

    return (
        <div>
            {
                // show only on players locked in combat
                player.stats.locked.id &&
                <p style = { lockedStyle }>Locked in combat!</p>
            }
            {
                // show only on challengeable players, when I am not locked in combat
                !me.stats.locked.id && !player.stats.locked.id && isChallengeable &&
                <div
                    style = { challengeStyle }
                    onClick={() => challengeHandler(me, player)}>
                    challenge { player.displayName.split(' ')[0] }!
                </div>
            }
            {
                // show only on myself when I am locked in combat
                isMe && player.stats.locked.id &&
                <div style = { unlockButtonParentStyle }>
                    <div
                        style = { unlockButtonStyle }
                        onClick = { () => unchallengeHandler(authedPlayerId, myOpponentId, 'won') }>
                        Won! :)
                    </div>
                    <div
                        style = { unlockButtonStyle }
                        onClick = { () => unchallengeHandler(authedPlayerId, myOpponentId, 'lost') }>
                        Lost :(
                    </div>
                    <div
                        style = { unlockButtonStyle }
                        onClick = { () => unchallengeHandler(authedPlayerId, myOpponentId, '') }>
                        Cancel :|
                    </div>
                </div>
            }
        </div>
    );
};


export default ChallengeWidget;