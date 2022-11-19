import { expect, server } from './setup';

describe('Test root project route', () => {
  it('should receive confirmation of project creation', () => {
    server
      .post('/project')
      .send({
        projectName: 'Test Project'
      })
      .expect(200)
      .end((req, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.message).to.shallowDeepEqual({
          response: 'Project \'Test Project\' has been created',
        });
      });
  });
});
