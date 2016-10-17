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
        const style = {
            fontFamily: 'Indie Flower',
            textAlign: 'center',
            color: '#FFF9E6',
            fontSize: 48
        };

        return (
            <div style = {{ margin: 20, backgroundColor: '#7141B7' }}>
                <p style = { style }>Welcome to the Awesome Pickleball Leaderboard!</p>
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