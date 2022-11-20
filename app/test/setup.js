/* eslint-disable */
import supertest from 'supertest';
/* eslint-enable */

import app from '../src/app';

export const server = supertest.agent(app);
