import React from 'react';
import { Link } from 'react-router';


const NavLink = props => (
    <Link { ...props } activeStyle={{ color: 'red' }} />
);


export default NavLink;