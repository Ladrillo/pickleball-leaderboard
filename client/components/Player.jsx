import React from 'react';


const Player = props => {

    const style = {
        margin: 10,
        padding: 10,
        borderStyle: 'solid',
        backgroundColor: props.authedPlayer._id === props.player._id ? 'green' : 'red'
    };

    return (
        <div style = { style }>
            <p>SCORE: { props.player.stats.score }</p>
            <p>{ props.player.displayName }</p>
            <p>{ props.player.score }</p>
            {
                props.authedPlayer._id !== props.player._id &&
                <a href="#">challenge this guy</a>
            }
        </div>
    );
};


export default Player;