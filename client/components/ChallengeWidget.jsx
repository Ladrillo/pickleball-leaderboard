import React from 'react';

import { getChallengeables } from '../helpers/sorting';


let ChallengeWidget = props => {

    let { challengeHandler, unchallengeHandler } =  props;
    let { player, me, authedPlayerId, isChallengeable, myOpponentId, isMe } = props;
console.log('widget rendering!')
    return (
        <div>
            {
                // show only on challengeable players, when I am not locked in combat
                !me.stats.locked.id && !player.stats.locked.id && isChallengeable &&
                <button
                    onClick={() => challengeHandler(me, player)}>
                    challenge { player.displayName.split(' ')[0] }!
                </button>
            }
            {
                // show only on players locked in combat
                player.stats.locked.id &&
                <div>Locked in combat!</div>
            }
            {
                // show only on myself when I am locked in combat
                isMe && player.stats.locked.id &&
                <div>
                    <button 
                        onClick = { () => unchallengeHandler(authedPlayerId, myOpponentId, 'won') }>
                        Gloriously defeated my foe!
                    </button>
                    <br/>
                    <button
                        onClick = { () => unchallengeHandler(authedPlayerId, myOpponentId, 'lost') }>
                        Got my butt handed to me
                    </button>
                    <br/>
                    <button
                        onClick = { () => unchallengeHandler(authedPlayerId, myOpponentId, '') }>
                        Cancel challenge
                    </button>
                </div>
            }
        </div>
    );
};


export default ChallengeWidget;