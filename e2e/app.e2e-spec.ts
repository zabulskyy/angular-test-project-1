import { TestProjectPage } from './app.po';

describe('test-project App', () => {
  let page: TestProjectPage;

  beforeEach(() => {
    page = new TestProjectPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
