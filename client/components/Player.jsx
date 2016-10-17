import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as types from '../actionTypes';
import * as actions from '../actions/actions';

import { calculateColor } from '../helpers/player';

import ChallengeWidget from './ChallengeWidget';


const Player = props => {

    const { player, me, authedPlayerId, myOpponent, isMe, isMyOpponent, isChallengeable } = props;
    const { challenge, unchallenge } = props;

    const selectColor = () => {
        if (isMe || isMyOpponent) return '#FDC403';
        else return '#FFF9E6';
    };

    const divStyle = {
        margin: 10,
        padding: 10,
        borderStyle: 'solid',
        borderRadius: 10,
        backgroundColor: selectColor()
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

    const parentStyle = {
        display: 'flex',
        justifyContent: 'flex-end'
    };

    return (
        <div style = { divStyle }>
            <div style = { parentStyle }>
                <div style = { scoreStyle }>{ player.stats.score }</div>
            </div>
            <div style = { nameStyle }>{ player.displayName }</div>
            <div>{ player.score }</div>
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


const mapStateToProps = (state, ownProps) => ({
    state,
    authedPlayerId: state.authedPlayerId,
    me: state.players.find(pl => pl._id === state.authedPlayerId),
    myOpponent: state.players.find(pl => pl.stats.locked.id === state.authedPlayerId)
});
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Player);