import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/MenuBar.css';

const toggleMenu = () => {
    document.querySelector(".menu_box .menu_overlay").classList.toggle("active");
}

const MenuBar = () => (
    <div>
        <div className="menu_box vr_red_background">
            <button className="vr_section_subhead uppercase" onClick={toggleMenu}>Menu</button>
            <div className="menu_overlay">
                <ul>
                    <li className="vr_section_subhead"><Link className="link_no_decoration" to="/get-involved">Get Involved</Link></li>
                    <li className="vr_section_subhead"><Link className="link_no_decoration" to="/state-requirements">State Requirements</Link></li>
                    <li className="vr_section_subhead"><Link className="link_no_decoration" to="/about">About</Link></li>
                </ul>
            </div>
        </div>
        <div className="links_box vr_red_background vr_uppercase">
            <div className="vr_section_subhead"><Link className="link_no_decoration" to="/get-involved">Get Involved</Link></div>
            <div className="vr_section_subhead"><Link className="link_no_decoration" to="/state-requirements">State Requirements</Link></div>
            <div className="vr_section_subhead"><Link className="link_no_decoration" to="/about">About</Link></div>
        </div>
    </div>
);

export default MenuBar;