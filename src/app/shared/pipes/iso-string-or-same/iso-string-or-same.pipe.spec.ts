import { IsoStringOrSamePipe } from './iso-string-or-same.pipe';

describe('IsoStringOrSamePipe', () => {
  it('create an instance', () => {
    const pipe = new IsoStringOrSamePipe();
    expect(pipe).toBeTruthy();
  });
});
