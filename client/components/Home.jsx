import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as types from '../actionTypes';
import * as actions from '../actions/actions';


const Home = props => (
    <div>
        Welcome to the Awesome Pickleball Leaderboard!
        <br/>
        <button onClick = { props.bootstrapping }>bootstraps?</button>
        <h1>{ props.state.bootstrapping.text }</h1>
    </div>
);


const mapStateToProps = (state, ownProps) => ({
    state
});


const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);