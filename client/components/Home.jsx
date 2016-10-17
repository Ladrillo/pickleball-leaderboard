import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as types from '../actionTypes';
import * as actions from '../actions/actions';
import LeaderBoard from './LeaderBoard';


class Home extends React.Component {

    componentWillMount() {
        this.props.getPlayers();
    }

    render() {
        return (
            <div>
                Welcome to the Awesome Pickleball Leaderboard!
                <LeaderBoard />
            </div>
        );
    }
}


const mapStateToProps = (state, ownProps) => ({
    state
});
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);