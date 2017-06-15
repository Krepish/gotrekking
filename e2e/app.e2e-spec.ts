import { GotrekkingPage } from './app.po';

describe('gotrekking App', function() {
  let page: GotrekkingPage;

  beforeEach(() => {
    page = new GotrekkingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
