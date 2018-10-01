import React from 'react';
import Iframe from 'react-iframe';

class IframeBody extends React.Component {

  buildUrl() {
    let form = this.props.form;
    let loc = this.props.state.districtSelector;
    let url = form.url + '/?partner=194963&campaign=vote-remote&';
    
    url += form.firstName + '=' + this.props.state.firstName.replace(/ /g, '%20');
    url += '&' + form.lastName + '=' + this.props.state.lastName.replace(/ /g, '%20');
    url += '&' + form.streetLine1 + '=' + this.props.state[loc + 'Address_streetLine1'].replace(/ /g, '%20').replace(/\//g, '').replace(/#/g, '%23');
    url += ' ' + this.props.state[loc + 'Address_streetLine2'].replace(/ /g, '%20').replace(/\//g, '').replace(/#/g, '%23');
    url += '&' + form.city + '=' + this.props.state[loc + 'Address_city'].replace(/ /g, '%20');
    url += '&' + form.state + '=' + this.props.state[loc + 'Address_state'].replace(/ /g, '%20');
    url += '&' + form.zipCode + '=' + this.props.state[loc + 'Address_zipCode'].replace(/ /g, '%20');
      // Month MM;
    url += '&' + form.birthMonth + '=' + parseInt(this.props.state.birthMonth, 10);
      // Day DD;
    url += '&' + form.birthDay + '=' + parseInt(this.props.state.birthDay, 10);
      // Year YYYY;
    url += '&' + form.birthYear + '=' + parseInt(this.props.state.birthYear, 10);
    url += '&' + form.phone + '=' + this.props.state.phone.replace(/ /g, '%20').replace(/-/g, '');
    url += '&' + form.email + '=' + this.props.state.email.replace(/ /g, '%20');
    
    return url;
  }

  render() {
    return (
      <div>
        <Iframe
          className="iframe_before_load"
          url={this.buildUrl()}
          width="100%"
          height="50vh"
          id={this.props.form.id}
          display="initial"
          position="relative"
          allowFullScreen
        />
      </div>
    );
  }
}

export default IframeBody;