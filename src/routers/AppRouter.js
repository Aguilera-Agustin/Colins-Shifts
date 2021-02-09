import React from 'react'
import {
    BrowserRouter as Router,
    Switch
  } from "react-router-dom";

import { LoginPage } from '../components/Pages/Auth/LoginPage';
import { DashboardRouter } from './DashboardRouter';
import { PrivateRouter } from './PrivateRouter';
import { PublicRouter } from './PublicRouter';
  

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>

                    <PublicRouter path="/login" exact component={ LoginPage } isAuthenticated={true}/>

                    <PrivateRouter path="/" component={ DashboardRouter } isAuthenticated={true}/>

                </Switch>
            </div>
        </Router>
    )
}
