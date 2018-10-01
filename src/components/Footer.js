import React from 'react';
import { Link } from 'react-router-dom';
import SocialMediaLinks from './SocialMediaLinks';
import ReactGA from 'react-ga';

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
        <p>Vote Remote is a project of the <ReactGA.OutboundLink
            eventLabel="Footer link to Think Informed"
            to="http://www.thinkinformed.org"
            target="_blank">
            Institute for Social Engagement
            </ReactGA.OutboundLink>, a 501(c)(3) organization.</p>
    </div>
);

export default Footer;