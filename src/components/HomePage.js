import React from 'react';
import { Link } from 'react-router-dom';
import MenuBar from './MenuBar';
import '../styles/HomePage.css';

class HomePage extends React.Component {
    scrollToWhat() {
        document.querySelector('.what_box').scrollIntoView({
            block: 'start', 
            behavior: 'smooth' 
        });
    }

    render() {
        return (
            <div className="homepage_container">
                <MenuBar />
                <div className="banner_box homepage vr_uppercase">
                    <div className="vr_section_head">
                        52% of College Students Don't Vote
                    </div>
                    <div className="vr_section_subhead">
                        We're Ready to Change That
                    </div>
                    <Link className="started_box vr_red_background link_no_decoration" to="/get-started">
                        Get Started
                    </Link>
                    <div className="teaser_circle" onClick={this.scrollToWhat}>
                        <svg xmlns="http://www.w3.org/2000/svg">
                            <path fill="none" stroke-width="4" stroke-linecap="round" stroke="#FFF"
                                d="M30 25 L50 35 L70 25" />
                        </svg>
                    </div>
                </div>
                <div className="what_box vr_white_background">
                        <div className="vr_section_head vr_uppercase">
                            Vote Remote is a tool for...
                        </div>
                        <div className="what_icon_container">
                            <div className="what_icon_box">
                                <div className="vote_img img"></div>
                                <div className="vr_section_subhead vr_uppercase">
                                    Making Your Vote Count
                                </div>
                                <div className="img_txt">
                                    Use our state comparison tool to find out where your vote is the most useful.
                                </div>
                            </div>
                            <div className="what_icon_box">
                                <div className="ballot_img img"></div>
                                <div className="vr_section_subhead vr_uppercase">
                                    Getting Your Ballot In
                                </div>
                                <div className="img_txt">
                                    We’ll help you register or re-register. Check your state’s deadlines anytime.
                                </div>
                            </div>
                            <div className="what_icon_box">
                                <div className="group_img img"></div>
                                <div className="vr_section_subhead vr_uppercase">
                                    Joining a Community
                                </div>
                                <div className="img_txt">
                                    Connect with other students working to make their voices heard.
                                </div>
                            </div>
                        </div>
                </div>


                <div className="count_box">
                    <div className="count_box_text">
                            <h3 className="vr_section_head vr_uppercase">Make Your Vote Count</h3>
                        <p>
                            Vote Remote's goal is to simplify the remote voting process so you can focus on the issues and candidates you believe in. When you sign up, we'll help you:
                            <ul>
                                <li>See where you vote will have the greatest impact</li>
                                <li>Register to vote and request your ballot</li>
                                <li>Meet other students working to make their voices heard</li>
                            </ul>
                        </p>
                        <Link className="started_box vr_red_background link_no_decoration" to="/get-started">
                            Get Started
                        </Link>
                    </div>
                    <div className="count_box_image">
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage;