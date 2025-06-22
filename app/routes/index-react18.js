import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import Monitor from './Dashboards/Monitor/Monitor-react18';

const routes = [
    // Dashboard Routes
    {
        path: '/dashboards/monitor',
        component: <Monitor />,
        componentPath: './Dashboards/Monitor/Monitor-react18',
        exact: true,
    },
];

export const RoutedContent = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/dashboards/monitor" replace />} />

            {routes.map((route, index) => (
                <Route key={index} path={route.path} element={route.component} />
            ))}

            <Route path="*" element={<Navigate to="/pages/error-404" replace />} />
        </Routes>
    );
};
