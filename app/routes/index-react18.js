import React from 'react';
import { Redirect, Route, Switch } from 'react-router';

// ----------- Pages Imports ---------------
import Monitor from './Dashboards/Monitor/Monitor-react18';

// ----------- Layout Imports ---------------

// Routes configuration array
const routes = [
    // Dashboard Routes
    { path: '/dashboards/monitor', component: Monitor, exact: true },
];

//------ Route Definitions --------
// eslint-disable-next-line no-unused-vars
export const RoutedContent = () => {
    return (
        <Switch>
            <Redirect from="/" to="/dashboards/monitor" exact />

            {routes.map((route, index) => (
                <Route
                    key={index}
                    path={route.path}
                    component={route.component}
                    {...(route.exact && { exact: route.exact })}
                />
            ))}

            <Redirect to="/pages/error-404" />
        </Switch>
    );
};
