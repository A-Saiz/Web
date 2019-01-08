import React from 'react';
import { Link, Route, Router } from 'react-router-dom';

const Menu = () => (
    <div className="menu">
        <aside>
            <Link to={'/'}>Home</Link>
            <Link to={'/portfolio'}>Art Work</Link>
            <Link to={'/about'}>My Story</Link>
        </aside>
    </div>
  );

export default Menu;