import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as types from '../actionTypes';
import * as actions from '../actions/actions';

import { calculateColor } from '../helpers/player';

import ChallengeWidget from './ChallengeWidget';


let Player = props => {

    let { player, me, authedPlayerId, myOpponent, isMe, isMyOpponent, isChallengeable } = props;
    let { challenge, unchallenge } = props;

    let selectColor = () => {
        if (isMe || isMyOpponent) return '#FCD95D';
    };

    let style = {
        margin: 10,
        padding: 10,
        borderStyle: 'solid',
        backgroundColor: selectColor()
    };

    return (
        <div style = { style }>
            <p>SCORE: { player.stats.score }</p>
            <p>{ player.displayName }</p>
            <p>{ player.score }</p>
            <ChallengeWidget
                challengeHandler   = { challenge }
                unchallengeHandler = { unchallenge }
                player             = { player }
                me                 = { me }
                myOpponentId       = { myOpponent && myOpponent._id }
                authedPlayerId     = { authedPlayerId }
                isChallengeable    = { isChallengeable }
                isMe               = { isMe } />
        </div>
    );
};


let mapStateToProps = (state, ownProps) => ({
    state,
    authedPlayerId: state.authedPlayerId,
    me: state.players.find(pl => pl._id === state.authedPlayerId),
    myOpponent: state.players.find(pl => pl.stats.locked.id === state.authedPlayerId)
});
let mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Player);