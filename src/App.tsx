import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { withCookies } from 'react-cookie';
import '@/setting/fontawesome';
import '@/setting/reactmodal';
import TopPageContainer from '@/containers/TopPage';
import { ValidationPage } from '@/components/validation/Base';

const App: React.FC = () => (
  <BrowserRouter>
    <Route path="/" exact component={TopPageContainer} />
    <Route path="/validation" component={ValidationPage} />
  </BrowserRouter>
);

export default withCookies(App);
