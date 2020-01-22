import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import CartGreater from './pages/CartGreater';
import CartLess from './pages/CartLess';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/CartGreater" component={CartGreater} />
        <Route path="/CartLess" component={CartLess} />
      </Switch>
    </BrowserRouter>
  );
}
