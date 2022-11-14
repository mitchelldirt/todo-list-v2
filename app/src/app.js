import logger from 'morgan';
import express from 'express';
import cookieParser from 'cookie-parser';
import indexRouter from './routes/index';
import projectRouter from './routes/project';
import taskRouter from './routes/task';

const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/project', projectRouter);
app.use('/task', taskRouter);

export default app;
