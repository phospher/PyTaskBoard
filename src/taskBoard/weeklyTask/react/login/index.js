import dva from 'dva';
import Login from './page';
import React from 'react';

const app = dva();

app.router(() => <Login />);

app.start('#main');