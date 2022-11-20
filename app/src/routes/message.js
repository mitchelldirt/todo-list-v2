import express from 'express';
import { addMessage, messagesPage } from '../controllers';
import { appendSays } from '../middleware/middleware';

const messageRouter = express.Router();

messageRouter.get('/', messagesPage);
messageRouter.post('/', appendSays, addMessage);

export default messageRouter;
