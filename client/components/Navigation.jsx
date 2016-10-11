import React from 'react';
import NavLink from './navLink';


const Navigation = props => (
    <div>
        <ul style={{
            marginTop: '10px',
            display: 'flex',
            justifyContent: 'space-around',
            listStyleType: 'none'
        }}>
            <li><NavLink to='/home'>Home</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
        </ul>
        { props.children }
    </div>
);


export default Navigation;