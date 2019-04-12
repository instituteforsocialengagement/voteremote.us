import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import IntakeForm from './components/IntakeForm';
import CampusCoordinatorPage from './components/CampusCoordinatorPage';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import StateRequirementsPage from './components/StateRequirementsPage';
import TermsAndPrivacyPage from './components/TermsAndPrivacyPage';

import './App.css';

const App = () => (
  <div className="root">
    <Header />
      <Switch>
        <Route path={'/get-started'} component={IntakeForm} />
        <Route path={'/get-involved'} component={CampusCoordinatorPage} />
        <Route path={`/state-requirements/:usState`} component={StateRequirementsPage}/>
        <Route exact path={'/state-requirements'} component={StateRequirementsPage} />
        <Route path={'/about'} component={AboutPage} />
        <Route path={'/terms-and-privacy'} component={TermsAndPrivacyPage} />
        <Route exact path={'/'} component={HomePage} />
      </Switch>
    <Footer />
  </div>
)

export default App;
