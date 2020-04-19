/**
 * Name : Parshant Nagpal
 * FileName: routes.web.js
 * Description : contains all routes that we are used inside react router
 * Date : 12 December 2018
 */
import React, {Component} from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {history} from '../helpers';
import AppRoute from './AppRoute';
import {
  Dashboard,
  SignIn,
  SignUp,
  NotFound,
  OTP,
  Prompt,
  RedeemPoints,
  PromotionalEvents,
  Offers,
  PointsHistory,
  Profile,
  Checkout,
  Admin,
} from '../container';
import {frontLayout, dashboardLayout} from './Layouts';

export default props => {
  const {isLoggedIn} = useSelector(({user}) => user),
    {pathname} = history.location;
  return (
    <Router history={history}>
      <Switch>
        <AppRoute
          exact
          path="/"
          component={Prompt}
          layout={frontLayout}
          isLogin={isLoggedIn}
        />
        <AppRoute
          exact
          path="/SignIn"
          component={SignIn}
          layout={frontLayout}
          isLogin={isLoggedIn}
        />
        <AppRoute
          exact
          path="/SignUp"
          component={SignUp}
          layout={frontLayout}
          isLogin={isLoggedIn}
        />
        <AppRoute
          exact
          path="/Dashboard"
          component={Dashboard}
          layout={frontLayout}
          isLogin={isLoggedIn}
        />
        <AppRoute
          exact
          path="/OTP"
          component={OTP}
          layout={frontLayout}
          isLogin={isLoggedIn}
        />
        <AppRoute
          exact
          path="/RedeemPoints"
          component={RedeemPoints}
          layout={frontLayout}
          isLogin={isLoggedIn}
        />
        <AppRoute
          exact
          path="/PromotionalEvents"
          component={PromotionalEvents}
          layout={frontLayout}
          isLogin={isLoggedIn}
        />
        <AppRoute
          exact
          path="/Offers"
          component={Offers}
          layout={frontLayout}
          isLogin={isLoggedIn}
        />
        <AppRoute
          exact
          path="/PointsHistory"
          component={PointsHistory}
          layout={frontLayout}
          isLogin={isLoggedIn}
        />
        <AppRoute
          exact
          path="/Profile"
          component={Profile}
          layout={frontLayout}
          isLogin={isLoggedIn}
        />
        <AppRoute
          exact
          path="/Checkout"
          component={Checkout}
          layout={frontLayout}
          isLogin={isLoggedIn}
        />
        <AppRoute
          exact
          path="/Admin"
          component={Admin}
          layout={frontLayout}
          isLogin={isLoggedIn}
        />

        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};
