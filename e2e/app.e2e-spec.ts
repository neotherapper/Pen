import { PenPage } from './app.po';

describe('pen App', () => {
  let page: PenPage;

  beforeEach(() => {
    page = new PenPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
