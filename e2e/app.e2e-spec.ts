import { OortCloudPage } from './app.po';

describe('oort-cloud App', () => {
  let page: OortCloudPage;

  beforeEach(() => {
    page = new OortCloudPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
