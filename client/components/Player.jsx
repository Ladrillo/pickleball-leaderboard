import React from 'react';
import { getChallengeables } from '../helpers/sorting';


const Player = props => {

    const style = {
        margin: 10,
        padding: 10,
        borderStyle: 'solid',
        backgroundColor: props.authedPlayer._id === props.player._id ? 'green' : 'red'
    };

    const challengeables = getChallengeables(props.players, props.authedPlayer);

    return (
        <div style = { style }>
            <p>SCORE: { props.player.stats.score }</p>
            <p>{ props.player.displayName }</p>
            <p>{ props.player.score }</p>
            {
                challengeables.indexOf(props.player._id) > -1 &&
                !props.authedPlayer.stats.locked.id &&
                <button
                    onClick = { () => props.challengeHandler(props.authedPlayer, props.player) }>
                    challenge this guy
                </button>
            }
            {
                props.player.stats.locked.id &&
                <div>CURRENTLY LOCKED IN COMBAT!</div>
            }
        </div>
    );
};


export default Player;