import React from 'react';

import { ThemeProvider } from '../components';

// import './../styles/bootstrap.scss';
// import './../styles/main.scss';
// import './../styles/plugins/plugins.css';
// import './../styles/plugins/plugins.scss';

const favIcons = [
    { rel: 'icon', type: 'image/x-icon', href: require('./../images/favicons/favicon.ico') },

    { rel: 'apple-touch-icon', sizes: '180x180', href: require('./../images/favicons/apple-touch-icon.png') },

    { rel: 'icon', type: 'image/png', sizes: '32x32', href: require('./../images/favicons/favicon-32x32.png') },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: require('./../images/favicons/favicon-16x16.png') },
];

export default function AppLayout({ children }) {
    return (
        <ThemeProvider initialStyle="light" initialColor="primary">
            {/* <Layout sidebarSlim favIcons={favIcons}>
                <Layout.Content>{children}</Layout.Content>
            </Layout> */}
            {children}
        </ThemeProvider>
    );
}
