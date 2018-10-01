import React from 'react';
import ReactTooltip from 'react-tooltip';
import SearchBox from '../form-helpers/SearchBox';
import '../../styles/form-inputs.css';

// Note: <Search /> itself has the "required" tag (re HTML validation)
// which is why <SearchBox /> doesn't have a "required" tag
const Name = (props) => (
    <div>
        <ReactTooltip place='bottom' type='info' effect='solid' multiline={true} />
        <div className="form_header_progress_bar">
            <img src="./images/form-header-your-info.png" alt="Your Info" />
        </div>
        <div className="form_header_box">
            <h1>Your Info</h1>
        </div>
        <div>
        <hr />
        <p>Hey! Our signup process will walk you through:</p>
        <ul>
            <li>Where you can register to vote</li>
            <li>How to register to vote (you’ll be offered a choice to skip this step if you’re already registered at your chosen address)</li>
            <li>How to request your absentee ballot</li>
            <li>The deadline for each step</li>
        </ul>
        <p>We estimate this should take 5-10 minutes.</p>
        <hr />
        </div>
        <form onSubmit={props.handleSubmit} name="Name">
            <div className="form_group">
                <div className="form_field name first_name">
                    <label htmlFor="firstName">Your Full Legal Name</label>
                    <input
                        autoComplete="never"
                        type="text"
                        name="firstName"
                        placeholder="Legal First Name"
                        value={props.state["firstName"]}
                        onChange={props.handleChange}
                    />
                    <div className={props.state.errorMsgs["firstName"] === undefined ? "" : "ui red message"}>
                        <span>{props.state.errorMsgs["firstName"]}</span>
                    </div>
                </div>
                <div className="form_field name last_name">
                    <label htmlFor="lastName" className="hidden last_name_label">Last Name</label>
                    <input
                        autoComplete="never"
                        type="text"
                        name="lastName"
                        placeholder="Legal Last Name"
                        value={props.state["lastName"]}
                        onChange={props.handleChange}
                    />
                    <div className={props.state.errorMsgs["lastName"] === undefined ? "" : "ui red message"}>
                        <span>{props.state.errorMsgs["lastName"]}</span>
                    </div>                
                </div>
            </div>
            <div className="form_field">
                <label htmlFor="email">Your Email</label>
                <input
                    autoComplete="never"
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    value={props.state["email"]}
                    onChange={props.handleChange}
                />
                <p className="disclaimer_contact">You will receive occasional emails from Vote Remote. You can unsubscribe at any time.</p>
                <div className={props.state.errorMsgs["email"] === undefined ? "" : "ui red message"}>
                    <span>{props.state.errorMsgs["email"]}</span>
                </div>            
            </div>
            <div className="form_field">
                <label htmlFor="school">Your School (type at least 3 letters of the name to search)</label>
                <p className="disclaimer_contact">Not a student? Register at <a href="http://www.vote.org">Vote.org</a>!</p>
                <SearchBox 
                    name="school"
                    onSchoolSelect={props.handleChange}
                    value={props.state["school"]}
                />
                <div className={props.state.errorMsgs["school"] === undefined ? "" : "ui red message"}>
                    <span>{props.state.errorMsgs["school"]}</span>
                </div>            
            </div>
            <div className="form_field">
                <label htmlFor="phone">Your Cell Phone Number</label>
                <input
                    autoComplete="never"
                    type="text"
                    name="phone"
                    placeholder="xxx-xxx-xxxx"
                    value={props.state["phone"]}
                    onChange={props.handleChange}
                />
                <p className="disclaimer_contact">If you provide your cell phone number, you will receive occasional text messages from Vote Remote about election reminders and, at some campuses, voting-related events. Message and data rates may apply. Text STOP to opt out. Text HELP for more info.</p>
                <div className={props.state.errorMsgs["phone"] === undefined ? "" : "ui red message"}>
                    <span>{props.state.errorMsgs["phone"]}</span>
                </div>            
            </div>
            <div className="buttons">
                <button type="submit" className="button form_button_solid_background form_button">
                    Next
                </button>
            </div>
        </form>
    </div>
);

export default Name;