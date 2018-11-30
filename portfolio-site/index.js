import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import main from './src/app/main';

const container = document.querySelector('#app')

const app = () => (
    <BrowserRouter>
        <main />
    </BrowserRouter>
)

ReactDOM.render(<app />, container)