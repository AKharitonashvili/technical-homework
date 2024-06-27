import { IsHolidayPipe } from './is-holiday.pipe';

describe('IsHolidayPipe', () => {
  it('create an instance', () => {
    const pipe = new IsHolidayPipe();
    expect(pipe).toBeTruthy();
  });
});
