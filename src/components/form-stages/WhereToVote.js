import React from 'react';

class WhereToVote extends React.Component {
  state = {
      margins: {},
      warnings: {},
      marginsLoaded: false,
      warningsLoaded: false
    }

  // Processes the data and puts the desired info in state
  processJson = (data, typeOfData) => {
    if (typeOfData === 'margins') {
      const homeState = this.props.state.homeAddress_state;
      const schoolState = this.props.state.schoolAddress_state;

      let homePercentTrump,
          homePercentClinton,
          homePercentOther,
          schoolPercentTrump,
          schoolPercentClinton,
          schoolPercentOther;
      for (let i = 0; i < data.length; i++) {
        if (data[i]['state-short'] === homeState) {
          homePercentTrump = data[i]['percent-trump'];
          homePercentClinton = data[i]['percent-clinton'];
          homePercentOther = data[i]['percent-other'];
        }
        if (data[i]['state-short'] === schoolState) {
          schoolPercentTrump = data[i]['percent-trump'];
          schoolPercentClinton = data[i]['percent-clinton'];
          schoolPercentOther = data[i]['percent-other'];
        }
      }
      // Create a sorted array of objects
      let homePercent = [
        {
          candidate: 'Donald J. Trump (Republican)',
          percent: homePercentTrump
        },
        {
          candidate: 'Hillary Clinton (Democrat)',
          percent: homePercentClinton
        },
        {
          candidate: 'Other (other parties and write-in votes)',
          percent: homePercentOther
        }
      ];
      let schoolPercent = [
        {
          candidate: 'Donald J. Trump (Republican)',
          percent: schoolPercentTrump
        },
        {
          candidate: 'Hillary Clinton (Democrat)',
          percent: schoolPercentClinton
        },
        {
          candidate: 'Other (other parties and write-in votes)',
          percent: schoolPercentOther
        }
      ]
      // Sort from highest to lowest
      let homePercentSorted = homePercent.sort( (a, b) => {
        return a.percent > b.percent ? -1 : 1;
      });
      let schoolPercentSorted = schoolPercent.sort( (a, b) => {
        return a.percent > b.percent ? -1 : 1;
      });

      this.setState({
        margins: {
          homePercentSorted,
          schoolPercentSorted
        },
        marginsLoaded: true
      })
    }
    else if (typeOfData === 'warnings') {
      const homeState = this.props.state.homeAddress_state;
      const schoolState = this.props.state.schoolAddress_state;
      this.setState({
        warnings: {
          homeState: data[homeState],
          schoolState: data[schoolState],
          allStates: data['all']
        },
        warningsLoaded: true
      })
    }
  }

  getJson = (url, typeOfData) => {
    var request = new XMLHttpRequest();
    var component = this;
    request.open('GET', url, true);
    request.onload = function() {
      if (this.status >=200 && this.status < 400) {
        var data = JSON.parse(this.response);
        component.processJson(data, typeOfData);
      } else {
        // Error
      }
    };
    request.onerror = function() {
      // Connection error
    };
    request.send();
  }

  onClick = (e) => {
    const districtSelector = e.target.value;
    this.props.updateDistrictSelector(districtSelector);
    this.props.handleStepChange('AreYouRegistered');
  }

  componentDidMount() {
    this.getJson('./stateMarginsByCandidate.json', 'margins');
    this.getJson('./stateWarnings.json', 'warnings');
  }

  render() {
    if (this.state.marginsLoaded === false || this.state.warningsLoaded === false) {
      return (
        <div>
          <p>Loading...</p>
        </div>
      )
    }
    else {
      return (
        <div>
          <div className="form_header_progress_bar">
            <img src="./images/form-header-your-vote.png" alt="Your Vote" />
          </div>
          <div className="form_header_box">
            <h1>Where do you want to vote?</h1>
          </div>
          <div className="form_description_box">
            <p>If you're a student who lives at one address during the semester, and a different address when you're not at school, you can choose to register to vote in either location (but not both).</p>
          </div>
          <div>
          <div>
            <div className="form_header_box">
                <h2>Home Address</h2>
                <p>{ this.props.state.homeAddress_streetLine1 },{' '}
                { this.props.state.homeAddress_streetLine2 && `${ this.props.state.homeAddress_streetLine2 }, ` }
                { this.props.state.homeAddress_city },{' '}
                { this.props.state.homeAddress_state }{' '}
                { this.props.state.homeAddress_zipCode }</p>
              </div>
              <div className="form_description_box">
                <a href={`https://ballotpedia.org/Sample_Ballot_Lookup#address=${this.props.state.homeAddress_streetLine1}%20${this.props.state.homeAddress_city}%20${this.props.state.homeAddress_state}%20${this.props.state.homeAddress_zipCode}`}>Click here to see this address's sample ballot at Ballotpedia</a>
                <p className="small_text">(Ballotpedia is an external site not affiliated with Vote Remote)</p>
              </div>
              <div className="form_description_box">
                <p>2016 presidential election results for {this.props.state.homeAddress_state}:</p>
                <table className="table_presidential_results">
                  <tbody>
                    { this.state.margins.homePercentSorted.map( (item) => (
                      <tr key={`${this.props.state.homeAddress_state}_${item.candidate}`}><td>{item.candidate}:</td><td>{Math.round(item.percent * 100)}%</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
              { this.state.warnings.homeState && this.state.warnings.homeState.map( (item, index) => 
                <div id={index} className="form_description_box">
                <p>{item['warning-text']}</p>
                </div> )
              }
              { this.state.warnings.allStates && this.state.warnings.allStates.map( (item, index) => 
                <div id={index} className="form_description_box" key={index}>
                <p>{item['warning-text']}</p>
                </div> )
              }
              <button className="form_button form_button_solid_background no_top_margin" value="home" onClick={this.onClick}>I Want to Vote at Home Address</button>
            </div>
            <div>
              <div className="form_header_box">
                <h2>School Address</h2>
                <p>{ this.props.state.schoolAddress_streetLine1 },{' '}
                { this.props.state.schoolAddress_streetLine2 && `${ this.props.state.schoolAddress_streetLine2 }, ` }
                { this.props.state.schoolAddress_city },{' '}
                { this.props.state.schoolAddress_state }{' '}
                { this.props.state.schoolAddress_zipCode }</p>
              </div>
              <div className="form_description_box">
                <a href={`https://ballotpedia.org/Sample_Ballot_Lookup#address=${this.props.state.schoolAddress_streetLine1}%20${this.props.state.schoolAddress_city}%20${this.props.state.schoolAddress_state}%20${this.props.state.schoolAddress_zipCode}`}>Click here to see this address's sample ballot at Ballotpedia</a>
                <p className="small_text">(Ballotpedia is an external site not affiliated with Vote Remote)</p>
              </div>
              <div className="form_description_box">
                <p>2016 presidential election results for {this.props.state.schoolAddress_state}:</p>
                <table className="table_presidential_results">
                  <tbody>
                    { this.state.margins.schoolPercentSorted.map( (item) => (
                      <tr key={`${this.props.state.schoolAddress_state}_${item.candidate}`}><td>{item.candidate}:</td><td>{Math.round(item.percent * 100)}%</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
              { this.state.warnings.schoolState && this.state.warnings.schoolState.map( (item, index) => 
                <div id={index} className="form_description_box" key={index}>
                  <p>{item['warning-text']}</p>
                </div> )
              }
              { this.state.warnings.allStates && this.state.warnings.allStates.map( (item, index) => 
                <div id={index} className="form_description_box" key={index}>
                <p>{item['warning-text']}</p>
                </div> )
              }
              <button className="form_button form_button_solid_background  no_top_margin" value="school" onClick={this.onClick}>I Want to Vote at School Address</button>
            </div>
          </div>
          <p className="disclaimer_legal">This is not legal advice and we are not responsible if information is not fully accurate. Users of this site should also consult their state’s elections website to confirm information.</p>
        </div>
      )
    }

  }
}

export default WhereToVote;