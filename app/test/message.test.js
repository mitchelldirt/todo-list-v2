import { server } from './setup';

describe('Messages', () => {
  it('get messages page', done => {
    server
      .get('/messages')
      .expect(200)
      .end((err, res) => {
        if (err) throw err;
        expect(res.status).toBe(200);
        expect(Array.isArray(res.body.messages)).toBeTruthy();
        res.body.messages.forEach(m => {
          expect(m).toHaveProperty('name');
          expect(m).toHaveProperty('message');
        });
        done();
      });
  });

  it('posts messages', done => {
    const data = { name: 'some name', message: 'new message' };
    server
      .post('/messages')
      .send(data)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        expect(res.status).toBe(200);
        expect(Array.isArray(res.body.messages)).toBeTruthy();
        res.body.messages.forEach(m => {
          expect(m).toHaveProperty('id');
          expect(m).toHaveProperty('name', data.name);
          expect(m).toHaveProperty('message', `SAYS: ${data.message}`);
        });
        done();
      });
  });
});
