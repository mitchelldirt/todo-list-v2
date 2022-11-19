/* eslint-disable */
import supertest from 'supertest';
import chai from 'chai';
import sinonChai from 'sinon-chai';
/* eslint-enable */

import app from '../src/app';

chai.use(sinonChai);
chai.use(require('chai-better-shallow-deep-equal'));

export const { expect } = chai;
export const server = supertest.agent(app);
export const BASE_URL = '/';
