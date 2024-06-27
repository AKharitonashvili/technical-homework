import { TitleTypeToTextPipe } from '../input-error-to-text/title-type-to-text.pipe';

describe('TitleTypeToTextPipe', () => {
  it('create an instance', () => {
    const pipe = new TitleTypeToTextPipe();
    expect(pipe).toBeTruthy();
  });
});
