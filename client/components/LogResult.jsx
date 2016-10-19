import React from 'react';


const unlockButtonStyle = {
    fontFamily: 'Luckiest Guy',
    color: '#5213D4',
    fontSize: 24
};


const unlockButtonParentStyle = {
    display: 'flex',
    justifyContent: 'space-around'
};


const LogResult = props => {

    if (props.isMe && props.player.stats.locked.id) {
        return (
            <div style={ unlockButtonParentStyle }>
                <div
                    style   = { unlockButtonStyle }
                    onClick = { () => props.unchallengeHandler(
                        props.authedPlayerId,
                        props.myOpponentId,
                        'won') }>
                    Won! :)
                </div>
                <div
                    style   = { unlockButtonStyle }
                    onClick = { () => props.unchallengeHandler(
                        props.authedPlayerId,
                        props.myOpponentId,
                        'lost') }>
                    Lost :(
                </div>
                <div
                    style   = { unlockButtonStyle }
                    onClick = { () => props.unchallengeHandler(
                        props.authedPlayerId,
                        props.myOpponentId,
                        '') }>
                    Cancel :|
                </div>
            </div>
        );
    }
    return null;
};


export default LogResult;