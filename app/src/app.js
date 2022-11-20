import logger from 'morgan';
import express from 'express';
import cookieParser from 'cookie-parser';
import indexRouter from './routes/index';
import projectRouter from './routes/project';
import taskRouter from './routes/task';
import messageRouter from './routes/message';

const cors = require('cors');

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/project', projectRouter);
app.use('/task', taskRouter);
app.use('/messages', messageRouter);

export default app;
