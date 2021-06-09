import React, { ReactElement, memo } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Dashboard, Orders } from './pages';

const Routes = memo(
  (): ReactElement => (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/orders" component={Orders} />
      </Switch>
    </BrowserRouter>
  )
);

export default Routes;
