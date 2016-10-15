import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as types from '../actionTypes';
import * as actions from '../actions/actions';
import Player from './Player';


class LeaderBoard extends React.Component {

    componentWillMount() {
        this.props.getPlayers();
    }

    render() {
        const players = this.props.players.map(player => (
            <Player
                key          = { player._id }
                player       = { player }
                authedPlayer = { this.props.authedPlayer } />
        ));

        return (
            <div>
                { players }
            </div>
        );
    }
}


const mapStateToProps = (state, ownProps) => ({
    players: state.players,
    authedPlayer: state.authedPlayer
});


const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LeaderBoard);