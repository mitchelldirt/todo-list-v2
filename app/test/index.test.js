import { server } from './setup';

describe('Index page test', () => {
  it('gets base url', done => {
    server
      .get('/')
      .expect(200)
      .end((err, res) => {
        expect(res.status).toBe(200);
        expect(res.body.message).toBe('Is this thing on?');
        done();
      });
  });
});
