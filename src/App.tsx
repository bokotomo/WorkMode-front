import React from 'react';
import Modal from 'react-modal';
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

Modal.setAppElement('#root');

library.add(fab, faPlus, faCaretDown, faThumbsUp, faEdit, faTimes, faMoon);

const App: React.FC = () => <TopPageContainer />;

export default withCookies(App);
