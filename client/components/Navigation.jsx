import React from 'react';
import NavLink from './NavLink';


const Navigation = props => (
    <div>
        <ul style={{
            marginTop: '10px',
            display: 'flex',
            justifyContent: 'space-around',
            listStyleType: 'none'
        }}>
            <li><NavLink to='/about'>About</NavLink></li>
            <li><NavLink to='/'>Root</NavLink></li>
        </ul>
        { props.children }
    </div>
);


export default Navigation;