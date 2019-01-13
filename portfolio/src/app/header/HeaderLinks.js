import React from 'react';
import './styles/HeaderLinks.css';

import GitHubLogo from '../Images/github-icon.svg';

const HeaderLinks = () => (
    <div className="header-links">
        <ul className="items">
            <li className="item">
                <a href="https://github.com/A-Saiz"><img src={GitHubLogo} alt="Github"></img></a>
            </li>
        </ul>
    </div>
)

export default HeaderLinks;