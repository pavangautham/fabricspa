import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Wash from './components/wash/Wash';
import Profile from './components/profile/Profile';
import Orders from './components/orders/Orders';
import Payment from './components/payment/Payment';
import Offers from './components/offers/Offers';
import Feedback from './components/feedback/Feedback';
import Tnc from './components/tnc/Tnc';
import Privacy from './components/privacy/Privacy';

const Routes = ({ match }) => {
    console.log(match)
    return (
        <Switch>
            <Redirect exact from={`${match.url}`} to={`${match.url}wash`} />
            <Route path={`${match.url}wash`} component={Wash} />
            <Route path={`${match.url}profile`} component={Profile} />
            <Route path={`${match.url}orders`} component={Orders} />
            <Route path={`${match.url}payment`} component={Payment} />
            <Route path={`${match.url}offers`} component={Offers} />
            <Route path={`${match.url}feedback`} component={Feedback} />
            <Route path={`${match.url}tnc`} component={Tnc} />
            <Route path={`${match.url}privacy`} component={Privacy} />
        </Switch>
    );
};

export default Routes;