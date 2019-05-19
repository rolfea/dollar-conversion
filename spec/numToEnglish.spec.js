const numToEnglish = require('../numToEnglish.js').numToEnglish;

describe('converts single digits', function() {
  it('converts 1', function() {
    expect(numToEnglish('1')).toBe('One');
  });
});