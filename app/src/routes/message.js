import express from 'express';
import { addMessage, messagesPage } from '../controllers';
import { appendSays, performAsyncAction } from '../middleware/middleware';

const messageRouter = express.Router();

messageRouter.get('/', messagesPage);
messageRouter.post('/', appendSays, performAsyncAction, addMessage);

export default messageRouter;
