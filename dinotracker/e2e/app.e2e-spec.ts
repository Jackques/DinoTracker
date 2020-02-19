import { DinotrackerPage } from './app.po';

describe('dinotracker App', function() {
  let page: DinotrackerPage;

  beforeEach(() => {
    page = new DinotrackerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
