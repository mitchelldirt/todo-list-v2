import express from 'express';
import { addMessage, messagesPage } from '../controllers';

const messageRouter = express.Router();

messageRouter.get('/', messagesPage);
messageRouter.post('/', addMessage);

export default messageRouter;
