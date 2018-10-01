import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Joi from 'joi-browser';

import firebase from '../firebase/firebase';

import Name from './form-stages/Name';
import Address from './form-stages/Address';
import WhereToVote from './form-stages/WhereToVote';
import AreYouRegistered from './form-stages/AreYouRegistered';
import LookUpReg from './form-stages/LookUpReg';
import PrefillReg from './form-stages/PrefillReg';
import PrefillAbsenteeRequest from './form-stages/PrefillAbsenteeRequest';

import nameValidator from './form-validators/nameValidator';
import addressValidator from './form-validators/addressValidator';

class IntakeForm extends React.Component {
    state = {
        errorMsgs: {},
        firstName: "",
        lastName: "",
        email: "",
        school: "",
        phone: "",
        schoolAddress_streetLine1: "",
        schoolAddress_streetLine2: "",
        schoolAddress_city: "",
        schoolAddress_state: "",
        schoolAddress_zipCode: "",
        homeAddress_streetLine1: "",
        homeAddress_streetLine2: "",
        homeAddress_city: "",
        homeAddress_state: "",
        homeAddress_zipCode: "",
        bypassSchoolAddress: false,
        bypassHomeAddress: false,
        nameStepCompleted: false,
        addressStepCompleted: false,
        districtSelector: "",
        lastStepCompleted: ""
    }
    updateDistrictSelector = (district) => {
        this.setState( () => ({
            districtSelector: district
        }));
    }
    handleChange = (e) => {
        const target = e.target;
        const newState = {};
        // Handles any updates that need validation first
        if (target.type === 'checkbox') {
            if (target.checked) {
                // If one of the bypasses is already true, don't allow the other to become checked.
                // The user must uncheck the other one before they can check this one.
                if (this.state.bypassSchoolAddress || this.state.bypassHomeAddress) {
                    // Do nothing
                }
                else {
                    newState[target.name] = true;
                }
            }
            else {
                newState[target.name] = false;
            }
        }
        // Handles standard updates
        else {
            newState[target.name] = target.value;            
        }
        this.setState(newState);
    }
    validateForm = (validator) => {
        const newState = {
            errorMsgs: {}
        }
        Object.keys(validator).forEach( (key) => {
            const validation = Joi.validate(this.state[key], validator[key].validation);
            if (validation.error) {
                newState.errorMsgs[key] =
                    validator[key].errorMsg
                    ? validator[key].errorMsg
                    : validation.error.details[0].message;
            }
        })
        return newState;
    }
    // handleSubmit is used on Name and Address forms
    handleSubmit = (e) => {
        e.preventDefault();
        //TODO: Validate the input
        const currentStep = e.currentTarget.name;

        // Validate the input
        let validator = undefined;
        switch (currentStep) {
            case 'Name':
                validator = nameValidator;
                break;
            case 'Address':
                validator = addressValidator;
                break;
            default:
                break;
        }
        const stateUpdateValidation = this.validateForm(validator);
        // If Address step, remove errors if an address type is marked as bypass
        if (currentStep === 'Address' && (this.state.bypassSchoolAddress || this.state.bypassHomeAddress)) {
            for (let key in stateUpdateValidation.errorMsgs) {
                // console.log(key);
                if (key.includes("home") && this.state.bypassHomeAddress) {
                    // console.log("Inside home");
                    delete stateUpdateValidation.errorMsgs[key];
                }
                else if (key.includes("school") && this.state.bypassSchoolAddress) {
                    // console.log("Inside school");
                    delete stateUpdateValidation.errorMsgs[key];
                }
            }
            // console.log(stateUpdateValidation);
        }
        // If errors, display them; else go to next step
        if (Object.keys(stateUpdateValidation.errorMsgs).length > 0) {
            // console.log("Setting state");
            this.setState(stateUpdateValidation);
        }
        else {
            // console.log("Going to next step");
            this.setState({ errorMsgs: {} })
            // Let the state know that this step's been completed
            if (currentStep === 'Name') {
                this.setState({ nameStepCompleted: true});
            }
            else if (currentStep === 'Address') {
                this.setState({ addressStepCompleted: true});
            }
            // Determine which form to go to next based on current step
            let nextStep = '';
            switch (currentStep) {
                case 'Name':
                    nextStep = 'Address';
                    break;
                case 'Address':
                    if (this.state.bypassHomeAddress || this.state.bypassSchoolAddress) {
                        // Set next step to skip "Where to Vote"
                        nextStep = 'AreYouRegistered';
                        // Set the district selector to the appropriate value
                        if (this.state.bypassHomeAddress) {
                            this.setState({districtSelector: 'school'});
                        }
                        else if (this.state.bypassSchoolAddress) {
                            this.setState({districtSelector: 'home'});
                        }
                    }
                    else {
                        nextStep = 'WhereToVote';
                    }
                    break;
                default:
                    break;
            }
            // console.log(nextStep);
            this.handleStepChange(nextStep);
        }
    }
    handleStepChange = (nextStep) => {
        // Record the name of the current step, then save in Firebase
        this.setState( {
            lastStepCompleted: this.props.history.location.pathname
        }, () => {
            // Save data in Firebase
            const itemsRef = firebase.database().ref('items');
            const oldItem = this.state;
            itemsRef.push(oldItem).catch( (error) => console.log("Error writing to db."));
            // console.log("Saving data in firebase");
        });
        // Go to next step
        let path = '';
        // console.log("Here is nextStep", nextStep);
        switch (nextStep) {
            case 'Name':
                path = `${this.props.match.path}/name`;
                break;
            case 'Address':
                path = `${this.props.match.path}/address`;
                break;
            case 'WhereToVote':
                path = `${this.props.match.path}/where-to-vote`;
                break;
            case 'AreYouRegistered':
                path = `${this.props.match.path}/are-you-registered`;
                break;
            case 'LookUpReg':
                path = `${this.props.match.path}/look-up-registration`;
                break;
            case 'PrefillReg':
                path = `${this.props.match.path}/prefill-registration`;
                break;
            case 'PrefillAbsenteeRequest':
                path = `${this.props.match.path}/prefill-absentee-request`;
                break;
            case 'Finished':
                if (this.state.districtSelector === 'school') {
                    path = `/state-requirements/${this.state.schoolAddress_state}`
                }
                else if (this.state.districtSelector === 'home') {
                    path = `/state-requirements/${this.state.homeAddress_state}`
                }
                else {
                    path = '/state-requirements';
                }
                break;
            default:
                break;
        }
        // console.log(path);
        this.props.history.push(path);
    }

    // In the Switch component:
    // Address component can only be reached if Name component complete (nameStepComplete)
    // WhereToVote component can only be reached if Address component complete (addressStepComplete)
    // Subsequent components can only be reached if WhereToVote component has been completed
    // (districtSelector is not empty)
    render() {
        return (
            <div className="form_page">
                <div className="form_container">
                    <Switch>
                        <Route path={`${this.props.match.path}/name`} render={() => 
                            <Name 
                                handleChange={this.handleChange}
                                handleSubmit={this.handleSubmit}
                                state={this.state}
                            />} />
                        <Route path={`${this.props.match.path}/address`} render={() => {
                            if (!this.state.nameStepCompleted) {
                                return (
                                    <Redirect
                                        to={`${this.props.match.path}/name`}
                                    />
                                )
                            }
                            else {
                                return (
                                    <Address 
                                        handleChange={this.handleChange}
                                        handleSubmit={this.handleSubmit}
                                        state={this.state}
                                    />
                                )
                            }
                        } } />
                        <Route path={`${this.props.match.path}/where-to-vote`} render={() => {
                            if (!this.state.addressStepCompleted) {
                                return (
                                    <Redirect
                                        to={`${this.props.match.path}/address`}
                                    />
                                )
                            }
                            else {
                                return (
                                    <WhereToVote 
                                        handleStepChange={this.handleStepChange}
                                        state={this.state}
                                        updateDistrictSelector={this.updateDistrictSelector}
                                    />
                                )
                            }
                        } } />
                        <Route path={`${this.props.match.path}/are-you-registered`} render={() => {
                            if (!this.state.districtSelector) {
                                return (
                                    <Redirect
                                        to={`${this.props.match.path}/where-to-vote`}
                                    />
                                )
                            }
                            else {
                                return (
                                    <AreYouRegistered 
                                        handleStepChange={this.handleStepChange}
                                        state={this.state}
                                    />
                                )
                            }
                        } } />
                        <Route path={`${this.props.match.path}/look-up-registration`} render={() => {
                            if (!this.state.districtSelector) {
                                return (
                                    <Redirect
                                        to={`${this.props.match.path}/address`}
                                    />
                                )
                            }
                            else {
                                return (
                                    <LookUpReg
                                        handleStepChange={this.handleStepChange}
                                        state={this.state}
                                    />
                                )
                            }
                        } } />
                        <Route path={`${this.props.match.path}/prefill-registration`} render={() => {
                            if (!this.state.districtSelector) {
                                return (
                                    <Redirect
                                        to={`${this.props.match.path}/address`}
                                    />
                                )
                            }
                            else {
                                return (
                                    <PrefillReg 
                                        handleStepChange={this.handleStepChange}
                                        state={this.state}
                                    />
                                )
                            }
                        } } />
                        <Route path={`${this.props.match.path}/prefill-absentee-request`} render={() => {
                            if (!this.state.districtSelector) {
                                return (
                                    <Redirect
                                        to={`${this.props.match.path}/address`}
                                    />
                                )
                            }
                            else {
                                return (
                                    <PrefillAbsenteeRequest 
                                        handleStepChange={this.handleStepChange}
                                        state={this.state}
                                    />
                                )
                            }
                        } } />
                        <Route exact path={`${this.props.match.path}`} render={() => <Redirect to={`${this.props.match.path}/name`} />} />
                    </Switch>
                </div>
            </div>
        )
    }
}

export default IntakeForm;