import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as types from '../actionTypes';
import * as actions from '../actions/actions';

import { calculateColor } from '../helpers/player';

import ChallengeWidget from './ChallengeWidget';


const Player = props => {

    // const backgroundColor = calculateColor(props, challengeables);
    const { player, me, myOpponent, isMe, isMyOpponent, isChallengeable } = props;
    const { challenge, unchallenge } = props;

    const style = {
        margin: 10,
        padding: 10,
        borderStyle: 'solid',
        backgroundColor: 'white'
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
                myOpponent         = { myOpponent }
                isChallengeable    = { isChallengeable }
                isMyOpponent       = { isMyOpponent }
                isMe               = { isMe } />
        </div>
    );
};


const mapStateToProps = (state, ownProps) => ({});
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Player);