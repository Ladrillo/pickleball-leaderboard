import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as types from '../actionTypes';
import * as actions from '../actions/actions';

import { compareScoreFunction, getChallengeables } from '../helpers/sorting';
import { calculateColor } from '../helpers/player';

import Player from './Player';


class LeaderBoard extends React.Component {

    render() {

        const { players, authedPlayerId, me } = this.props;

        const challengeables = getChallengeables(players, me);

        const playersList = players.map(player => (
            <Player
                key             = { player._id }
                player          = { player }
                isMe            = { player._id === authedPlayerId || false }
                isMyOpponent    = { player.stats.locked.id === authedPlayerId || false }
                isChallengeable = { challengeables.indexOf(player._id) > -1 || false } />
        ));

        const style = {
            backgroundColor: '#7141B7'
        };

        return (
            <div style = { style }>
                { /*<button onClick = { this.props.getPlayers }>REFRESH LEADERBOARD!</button>*/ }
                { playersList.sort(compareScoreFunction ) }
            </div>
        );
    }
}


const mapStateToProps = (state, ownProps) => ({
    players: state.players,
    authedPlayerId: state.authedPlayerId,
    me: state.players.find(pl => pl._id === state.authedPlayerId),
});


const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LeaderBoard);