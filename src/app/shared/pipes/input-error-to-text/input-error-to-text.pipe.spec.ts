import { InputErrorToTextPipe } from '../input-error-to-text.pipe';

describe('InputErrorToTextPipe', () => {
  it('create an instance', () => {
    const pipe = new InputErrorToTextPipe();
    expect(pipe).toBeTruthy();
  });
});
