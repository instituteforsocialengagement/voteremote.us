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
        districtSelector: "",
        lastStepCompleted: ""
    }
    updateDistrictSelector = (district) => {
        this.setState( () => ({
            districtSelector: district
        }));
    }
    handleChange = (e) => {
        let newState = {};
        newState[e.target.name] = e.target.value;
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
        // If errors, display them; else go to next step
        if (Object.keys(stateUpdateValidation.errorMsgs).length > 0) {
            this.setState(stateUpdateValidation);
        }
        else {
            this.setState({ errorMsgs: {} })
            // Determine which form to go to next based on current step
            let nextStep = '';
            switch (currentStep) {
                case 'Name':
                    nextStep = 'Address';
                    break;
                case 'Address':
                    nextStep = 'WhereToVote';
                    break;
                default:
                    break;
            }
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
        });
        // Go to next step
        let path = '';
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
        this.props.history.push(path);
    }

    // In the Switch component:
    // Address component can only be reached if Name component has been completed
    // (which I am representing by firstName being not empty)
    // WhereToVote component can only be reached if Address component has been completed
    // (which I am representing by homeAddress Line 1 being not empty)
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
                            if (!this.state.firstName) {
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
                            if (!this.state.homeAddress_streetLine1) {
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