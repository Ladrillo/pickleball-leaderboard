import React from 'react';
import Router from 'react-router/BrowserRouter';
import Match from 'react-router/Match';
import Link from 'react-router/Link';


const About = ({ pathname }) => {
    return (
        <div>
            <h1>ABOUT PAGE</h1>
            <br/>

            <a href = '/'>back home</a><br/>
            <a href = '/about'>About</a><br/>

            <Link to = { `${pathname}/consensus` }>Consensus</Link><br/>
            <Link to = { `${pathname}/dev_team` }>Dev Team</Link><br/>
            <Link to = { `${pathname}/fish_tank` }>Fish Tank</Link>

            <hr/>

            <Match pattern = { `${pathname}/:topicId` } component = { Topic } />
            <Match exactly pattern = { `${pathname}` } render = { () => <h2>Select Topic</h2> } />
        </div>
    );
};


const Topic = ({ params }) => {

    return (
        <div>
            <h2>{ params.topicId }</h2>
        </div>
    );
};

export default About;