import React from 'react';
import { Link } from 'react-router-dom';
import MenuBar from './MenuBar';
import '../styles/AboutPage.css';

const AboutPage = () => (
    <div>
        <MenuBar />
        <div className="about_content_container">
            <div className="about_top_container">
            { /*
                <div className="about_top_container_image">
                    &nbsp;
                </div>
            */ }
                <div className="about_top_container_text">
                    <h2 className="vr_section_head vr_uppercase">About Us</h2>
                    <p>Tens of thousands of students live outside of their home states during election season. In a country full of confusing absentee voter rules, students often skip voting entirely.</p>
                    <p>Vote Remote helps students living on campuses get their votes in and counted.</p>
                    <p>As a voter engagement tool, Vote Remote leverages tech and real-life support to absentee and mail-in voters in high school, college, and graduate school. Vote Remote’s unique blend of web tools and personal outreach ensures that voters are registered, informed about their district’s absentee voting requirements, and ready to meet deadlines.</p>
                    <p>Even if you’re already registered, signing up for Vote Remote will provide you with reminders, IRL support, and access to your campus’s VR community.</p>
                    <Link to="/get-started" className="about_link_red_background">Get Started</Link>
                </div>
            </div>
            <div className="about_bottom_container">
                <h2 className="vr_section_head vr_uppercase">How You Can Help</h2>
                <div className="about_bottom_grid">
                    <div className="about_bottom_grid_item">
                        <h3 className="vr_section_subhead vr_uppercase">For College Students:</h3>
                        <p>Campus Coordinators are the center of their school’s Vote Remote community. They help students with every step of the absentee voting process, from looking up deadlines to tracking down campus printers.</p>
                        <Link to="/get-involved" className="about_link_no_background">Learn More</Link>
                    </div>
                    <div className="about_bottom_grid_item">
                        <h3 className="vr_section_subhead vr_uppercase">For Businesses and Donors:</h3>
                        <p>Vote Remote is a 501(c)(3) nonprofit. We accept tax-deductible donations and rely heavily on sponsors who can provide merchandise and food for events, as well as discount opportunities for our Campus Coordinators.</p>
                        <a className="about_link_no_background" href="mailto:donate@voteremote.us">Donate Now</a>
                    </div>
                    <div className="about_bottom_grid_item">
                        <h3 className="vr_section_subhead vr_uppercase">For Faculty Members:</h3>
                        <p>Vote Remote Supporting Faculty members are educators working to share Vote Remote's mission on their campuses.</p>
                        <a className="about_link_no_background" href="mailto:faculty@voteremote.us">Learn More</a>
                    </div>
                    <div className="about_bottom_grid_item">
                        <h3 className="vr_section_subhead vr_uppercase">For Anyone Else:</h3>
                        <p>We’re always in need of general volunteers, especially those with ties to high school and college communities. If you have a passion for fundraising or event planning, or simply want to get involved, join us at Vote Remote.</p>
                        <a className="about_link_no_background" href="mailto:volunteer@voteremote.us">Sign Up</a>
                    </div>                                        
                </div>
            </div>
        </div>
    </div>
)

export default AboutPage;