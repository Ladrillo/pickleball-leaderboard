import React from 'react';

import Status from './Status';
import Warcry from './Warcry';
import LogResult from './LogResult';

import { getChallengeables } from '../helpers/sorting';


const ChallengeWidget = props => (
    <div>
        <Status
            player = { props.player } />

        <Warcry
            player           = { props.player }
            me               = { props.me }
            isChallengeable  = { props.isChallengeable }
            challengeHandler = { props.challengeHandler } />

        <LogResult
            player             = { props.player }
            isMe               = { props.isMe }
            unchallengeHandler = { props.unchallengeHandler }
            authedPlayerId     = { props.authedPlayerId }
            myOpponentId       = { props.myOpponentId } />
    </div>
);


export default ChallengeWidget;