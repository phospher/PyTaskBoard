import dva, { connect } from 'dva';
import model from './model';
import TaskInput from './page'
import React from 'react';

const app = dva();

app.model(model);

app.router(() => <TaskInput />);

app.start('#main');