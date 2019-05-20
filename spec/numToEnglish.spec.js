const numToEnglish = require('../numToEnglish.js').numToEnglish;

describe('converts numbers between 0-19', function() {
  it('converts 1', function() {
    expect(numToEnglish('1')).toBe('One');
  });

  it('converts 5', function() {
    expect(numToEnglish('5')).toBe('Five');
  });

  it('converts 10', function() {
    expect(numToEnglish('10')).toBe('Ten');
  });

  it('converts 18', function() {
    expect(numToEnglish('18')).toBe('Eighteen');
  });
});

describe('converts numbers between 20 - 99', function() {
  it('converts 20', function() {
    expect(numToEnglish('20')).toBe('Twenty');
  });
  
  it('converts 10', function() {
    expect(numToEnglish('21')).toBe('Twenty One');
  });
  it('converts 25', function() {
    expect(numToEnglish('25')).toBe('Twenty Five');
  });

  it('converts 30', function() {
    expect(numToEnglish('30')).toBe('Thirty');
  });

  it('converts 52', function() {
    expect(numToEnglish('52')).toBe('Fifty Two');
  });

  it('converts 99', function() {
    expect(numToEnglish('99')).toBe('Ninety Nine');
  });

});