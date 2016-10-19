import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as types from '../actionTypes';
import * as actions from '../actions/actions';

import { calculateColor } from '../helpers/player';

import ChallengeWidget from './ChallengeWidget';
import NameAndScore from './NameAndScore';


const Player = props => {

    const divStyle = {
        margin: 10,
        padding: 10,
        borderStyle: 'solid',
        borderRadius: 10,
        backgroundColor: (props.isMe || props.isMyOpponent ? '#FDC403' : '#FFF9E6')
    };

    return (
        <div style = { divStyle }>
            <NameAndScore
                player = { props.player }/>
            <ChallengeWidget
                challengeHandler   = { props.challenge }
                unchallengeHandler = { props.unchallenge }
                player             = { props.player }
                me                 = { props.me }
                myOpponentId       = { props.myOpponent && props.myOpponent._id }
                authedPlayerId     = { props.authedPlayerId }
                isChallengeable    = { props.isChallengeable }
                isMe               = { props.isMe } />
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