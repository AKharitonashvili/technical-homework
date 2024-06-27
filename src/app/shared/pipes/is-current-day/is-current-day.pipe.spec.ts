import { IsCurrentDayPipe } from './is-current-day.pipe';

describe('IsCurrentDayPipe', () => {
  it('create an instance', () => {
    const pipe = new IsCurrentDayPipe();
    expect(pipe).toBeTruthy();
  });
});
