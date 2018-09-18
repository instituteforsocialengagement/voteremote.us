import React from 'react';

import MenuBar from './MenuBar';
import '../styles/CampusCoordinatorPage.css';

class CampusCoordinatorPage extends React.Component {
    scrollToFirstSectionHeader() {
        document.querySelector('.first_section_header').scrollIntoView({
            block: 'start', 
            behavior: 'smooth' 
        });
    }

    render() {
        return (
            <div>
                <MenuBar />
                <div className="banner_box campus_coordinator vr_uppercase">
                    <h1 className="vr_section_head">
                        Become a Campus Coordinator
                    </h1>
                    <h2 className="vr_section_subhead">
                        Work with us to get your campus voting.
                    </h2>
                    <a className="started_box vr_red_background link_no_decoration" href="mailto:campuscoordinators@voteremote.us">
                        Sign Up
                    </a>
                    <div className="teaser_circle" onClick={this.scrollToFirstSectionHeader}>
                        <svg xmlns="http://www.w3.org/2000/svg">
                            <path fill="none" stroke-width="4" stroke-linecap="round" stroke="#FFF"
                                d="M30 25 L50 35 L70 25" />
                        </svg>
                    </div>
                </div>
                <div className="section_header_blue first_section_header">
                    <h3 className="vr_section_subhead vr_uppercase">According to <span className="italic">The New York Times</span>,</h3>
                    <h2 className="vr_section_head vr_uppercase">over 50% of college students don't vote.</h2>
                </div>
                <div className="section_info_white">
                    <div className="section_info_two_wide_container">
                        <div className="section_info_text">
                            <h2 className="vr_uppercase vr_section_head red">You Can Change That</h2>
                            <p>Through events, social media, and personal conversations, Vote Remote Campus Coordinators help their classmates navigate the absentee voting process.</p>
                        </div>
                        <div className="section_info_image">
                            <img src="/images/two_students_shutterstock_653327275.jpg" alt="Two students in discussion" />
                        </div>
                    </div>
                </div>
                <div className="section_header_blue">
                    <h2 className="vr_section_head vr_uppercase">What You'll Do</h2>
                </div>
                <div className="section_info_white">
                    <div className="content_container">
                        <div className="section_info_icon_box_container">
                            <div className="icon_box">
                                <div className="img"><img src="/images/phones.svg" alt="Two smartphones" /></div>
                                <h3 className="vr_section_subhead vr_uppercase">Connect</h3>
                                <p>Through Facebook, "office" hours, and texts, find your communication style and spread the word about absentee voting.</p>
                            </div>
                            <div className="icon_box">
                                <div className="img"><img src="/images/calendar-checkmark.svg" alt="A calendar with a checkmark on it"/></div>
                                <h3 className="vr_section_subhead vr_uppercase">Host</h3>
                                <p>We'll provide funding, you plan the party. Let out your inner event planner and bring your campus together.</p>
                            </div>
                            <div className="icon_box">
                                <div className="img"><img src="/images/dialogue.svg" alt="Two figures engaging in dialogue"/></div>
                                <h3 className="vr_section_subhead vr_uppercase">Inform</h3>
                                <p>Using Vote Remote's resources, answer your classmates' questions about all things voting, from registration to postage.</p>
                            </div>
                        </div>
                        <a className="started_box vr_red_background link_no_decoration" href="https://marjie4.typeform.com/to/BlwrhS">
                            Sign Up
                        </a>
                    </div>
                </div>
                <div className="section_full_image">
                    <img src="/images/students_around_table_shutterstock_223920001.jpg" alt="Students sitting around a large table in a classroom" />
                </div>
                <div className="section_header_blue">
                    <h2 className="vr_section_head vr_uppercase">What You'll Get</h2>
                </div>
                <div className="section_info_white">
                    <div className="section_info_what_you_get_container">
                        <div className="what_you_get_item_container image_left">
                            <div className="what_you_get_item_image">
                                <img id="img_swag" src="/images/swag.svg" alt="Cardboard box with a shipping label" />
                            </div>
                            <div className="what_you_get_item_text">
                                <h3 className="vr_section_subhead vr_uppercase">Swag</h3>
                                <p>Just like your mom, we'll send you a care package. You'll get stickers and chalk, as well as written materials to share with your campus.</p>
                            </div>
                        </div>
                        <div className="what_you_get_item_container image_right">
                            <div className="what_you_get_item_image">
                                <img id="img_community" src="/images/community.svg" alt="Three people figures together" />
                            </div>
                            <div className="what_you_get_item_text">
                                <h3 className="vr_section_subhead vr_uppercase">Community</h3>
                                <p>We're here to help you out. We'll answer the tricky questions, help you set and reach goals, and do whatever we can to help you and your school.</p>
                            </div>                        
                        </div>
                        <div className="what_you_get_item_container image_left">
                            <div className="what_you_get_item_image experience">
                                <img id="img_experience" src="/images/experience.svg" alt="A resume" />
                            </div>
                            <div className="what_you_get_item_text">
                                <h3 className="vr_section_subhead vr_uppercase">Experience</h3>
                                <p>You'll gain familiarity with organizing, outreach, and leadership skills, i.e. prime resume material.</p>
                            </div>
                        </div>                        
                    </div>
                </div>
                <div className="section_full_image">
                    <img src="/images/students_and_wall_shutterstock_520091017.jpg" alt="A group of students standing against a white wall" />
                </div>
                <div className="section_info_blue">
                    <h2 className="vr_section_head vr_uppercase">Make a Difference</h2>
                    <p>We're working to change the way students vote, one school at a time.</p>
                    <p>To do that, we need people like you: creative, driven, and passionate about political engagement. People who want to share their own voice, and help others be heard. People who want to power through difficult and complicated systems, not give up.</p>
                    <a className="started_box vr_red_background link_no_decoration" href="https://marjie4.typeform.com/to/BlwrhS">
                        Sign Up
                    </a>
                </div>
            </div>
        )
    }
}

export default CampusCoordinatorPage;