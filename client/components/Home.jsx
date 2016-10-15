import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as types from '../actionTypes';
import * as actions from '../actions/actions';
import LeaderBoard from './LeaderBoard';


const Home = props => (
    <div>
        Welcome to the Awesome Pickleball Leaderboard!
        <br/>
        <LeaderBoard />
    </div>
);


const mapStateToProps = (state, ownProps) => ({
    state,
    players: state.players
});


const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);