import React from 'react';
import { Link } from 'react-router-dom';
import SocialMediaLinks from './SocialMediaLinks';

import '../styles/Footer.css';

const Footer = () => (
    <div className="footer">
        <div className="footer_box">
            <Link className="link_no_decoration" to="/get-involved">Get Involved</Link>
            <Link className="link_no_decoration" to="/state-requirements">State Requirements</Link>
            <Link className="link_no_decoration" to="/about">About</Link>
            <Link className="link_no_decoration" to="/terms-and-privacy">Terms & Privacy</Link>
        </div>
        <SocialMediaLinks className="social_box cr"/>
        <p className="footer_box">Vote Remote is a project of the Institute for Social Engagement, a 501(c)(3) organization.</p>
    </div>
);

export default Footer;