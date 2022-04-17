import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './Styles/globalStyles';
import Routes from './routes';

ReactDOM.render(
    <>
        <Routes /> 
        <GlobalStyles />
    </>,
    document.getElementById('root'));

