import { server } from './setup';

jest.useFakeTimers();

describe('Test root project route', () => {
  // console.log(JSON.stringify({
  //   projectName: 'Test Project'
  // }));
  it('should receive confirmation of project creation', done => {
    const data = { projectName: 'Test Project' };
    server
      .post('/project')
      .send(data)
      .set('Accept', 'application/json')
      .expect(200)
      .end((req, res) => {
        expect(res.status).toBe(200);
        expect(res.body.message).toEqual({
          response: 'Project \'Test Project\' has been created',
        });
        done();
      });
  });
});
