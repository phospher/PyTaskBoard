import dva from 'dva';
import model from './model';
import TaskInput from './page'
import React from 'react';
import ReactDOM from 'react-dom';

const app = dva();

app.model(model);

app.router(() => <TaskInput />);

app.start('#main');