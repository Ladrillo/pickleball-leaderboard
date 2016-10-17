import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as types from '../actionTypes';
import * as actions from '../actions/actions';

import { compareScoreFunction, getChallengeables } from '../helpers/sorting';
import { calculateColor } from '../helpers/player';

import Player from './Player';


class LeaderBoard extends React.Component {

    componentWillMount() {
        this.props.getPlayers();
    }

    render() {

        const { players, authedPlayerId } = this.props;

        const me             = players.find(pl => pl._id === authedPlayerId);
        const myOpponent     = players.find(pl => pl.stats.locked.id === me._id);
        const challengeables = getChallengeables(players, me);

        const playersList = players.map(player => (
            <Player
                key             = { player._id }
                player          = { player }
                me              = { me }
                myOpponent      = { myOpponent || null }
                isMe            = { player._id === me._id || false }
                isMyOpponent    = { (myOpponent && myOpponent._id) || false }
                isChallengeable = { challengeables.indexOf(player._id) > -1 || false } />
        ));

        return (
            <div>
                <button onClick = { this.props.getPlayers }>REFRESH LEADERBOARD!</button>
                { playersList.sort(compareScoreFunction ) }
            </div>
        );
    }
}


const mapStateToProps = (state, ownProps) => ({
    authedPlayerId: state.authedPlayerId,
    players: state.players
});


const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LeaderBoard);