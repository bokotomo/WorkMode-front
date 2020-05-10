import React from 'react';
import Modal from 'react-modal';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { withCookies } from 'react-cookie';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faPlus,
  faCaretDown,
  faThumbsUp,
  faEdit,
  faTimes,
  faMoon,
} from '@fortawesome/free-solid-svg-icons';
import TopPageContainer from './containers/TopPageContainer';
import { ValidationPage } from './components/validation/Base';

Modal.setAppElement('#root');

library.add(fab, faPlus, faCaretDown, faThumbsUp, faEdit, faTimes, faMoon);

const App: React.FC = () => (
  <Router>
    <Route path="/" exact component={TopPageContainer} />
    <Route path="/validation" component={ValidationPage} />
  </Router>
);

export default withCookies(App);
