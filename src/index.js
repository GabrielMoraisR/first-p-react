import React from 'react';
import ReactDOM from 'react-dom';
import Home from './containers/Home';
import Users from './containers/Users';
import GlobalStyles from './globalStyles';


ReactDOM.render(
    <>
        <Users /> 
        <GlobalStyles />
    </>,
    document.getElementById('root'));

