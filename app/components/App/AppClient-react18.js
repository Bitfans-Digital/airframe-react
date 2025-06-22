import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { RoutedContent } from 'routes/index-react18';
import AppLayout from '../../layout/default-react18';

const basePath = process.env.BASE_PATH || '/';

const AppClient = () => {
    return (
        <Router basename={basePath}>
            <AppLayout>
                <RoutedContent />
            </AppLayout>
        </Router>
    );
};

export default AppClient;
