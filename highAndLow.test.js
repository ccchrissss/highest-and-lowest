const highAndLow = require('./main')

test('max of 11, min of 1', () => {
  expect(highAndLow('5 2 1 10 11')).toBe('11 1');
});

test('max of 42, min of -9', () => {
  expect(highAndLow('8 3 -5 42 -1 0 0 -9 4 7 4 -4')).toBe('42 -9')
})