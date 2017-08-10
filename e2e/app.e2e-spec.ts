import { CaesarAppPage } from './app.po';

describe('caesar-app App', () => {
  let page: CaesarAppPage;

  beforeEach(() => {
    page = new CaesarAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
