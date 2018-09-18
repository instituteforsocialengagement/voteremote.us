import React from 'react';

import '../styles/SocialMediaLinks.css';

const SocialMediaLinks = ({ className }) => (
    <div className={className}>
        <div className="social vr_black_background">
            <a href="https://www.facebook.com/ThinkInformed/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
        </div>
        <div className="social vr_black_background">
            <a href="https://twitter.com/vote_remote" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
        </div>
        <div className="social vr_black_background">
            <a href="https://www.instagram.com/vote_remote/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
        </div>
        { /*
        <div className="social vr_black_background">
            <i className="far fa-envelope"></i>
        </div>
        <div className="social vr_black_background">
            <i className="fas fa-rss"></i>
        </div>
        */ }
    </div>
)

export default SocialMediaLinks;