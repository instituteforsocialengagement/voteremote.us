import React from 'react';
import { Link } from 'react-router-dom';
import SocialMediaLinks from './SocialMediaLinks';

import '../styles/Header.css';

const Header = () => (
    <div className="headline">
        <Link className="link_white_text" to="/">
            <img src="/images/VoteRemoteLogo-white-01.png" alt="Logo" />
            <h1>VOTE REMOTE</h1>
        </Link>
        <SocialMediaLinks className="social_box" />
    </div>
);

export default Header;