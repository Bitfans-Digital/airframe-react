import React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router } from 'react-router-dom';

import AppLayout from '../../layout/default-react18';
import { RoutedContent } from '../../routes/index-react18';

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

export default hot(module)(AppClient);
