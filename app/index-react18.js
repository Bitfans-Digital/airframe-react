import '@babel/polyfill';

import React from 'react';
import { render } from 'react-dom';

import App from './components/App/AppClient-react18';

render(<App />, document.querySelector('#root'));
