import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import '../src/index.css'
import WebFont from 'webfontloader';

WebFont.load({
    google: {
        families: ['Andale Mono', 'Avenir Next', 'American Typewriter']
    }
});

render((
    <BrowserRouter>
        <App/>
    </BrowserRouter>
), document.getElementById('root'));

