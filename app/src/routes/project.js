import express from 'express';
import { postProject, getProject } from '../controllers';

const projectRouter = express.Router();

projectRouter.post('/', postProject);
projectRouter.get('/', getProject);

export default projectRouter;
