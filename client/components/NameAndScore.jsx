import React from 'react';


const parentStyle = {
    display: 'flex',
    justifyContent: 'flex-end'
};

const nameStyle = {
    fontFamily: 'Indie Flower',
    textAlign: 'center',
    fontSize: 32,
    marginBottom: 12
};

const scoreStyle = {
    fontFamily: 'Luckiest Guy',
    fontSize: 28
};


const NameAndScore = props => (
    <div>
        <div style = { parentStyle }>
            <div style = { scoreStyle }>{ props.player.stats.score }</div>
        </div>
        <div style = { nameStyle }>
            { props.player.displayName }
        </div>
        <div>{ props.player.score }</div>
    </div>
);


export default NameAndScore;