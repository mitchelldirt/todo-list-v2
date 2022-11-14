import express from 'express';
import {
  getTask, postTask, patchTask, deleteTask
} from '../controllers';

const taskRouter = express.Router();

taskRouter.get('/', getTask);
taskRouter.post('/', postTask);
taskRouter.patch('/', patchTask);
taskRouter.delete('/', deleteTask);

export default taskRouter;
