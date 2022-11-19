import express from 'express';
import { messagesPage } from '../controllers';

const messageRouter = express.Router();

messageRouter.get('/', messagesPage);

export default messageRouter;
