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

  it('converts 11', function() {
    expect(numToEnglish('11')).toBe('Eleven');
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

describe('converts numbers between 100-999', function() {
  it('converts 100', function() {
    expect(numToEnglish('100')).toBe('One hundred');
  });

  it('converts 101', function() {
    expect(numToEnglish('101')).toBe('One hundred One');
  });

  it('converts 110', function() {
    expect(numToEnglish('110')).toBe('One hundred Ten');
  });

  it('converts 111', function() {
    expect(numToEnglish('111')).toBe('One hundred Eleven');
  });

  it('converts 121', function() {
    expect(numToEnglish('121')).toBe('One hundred Twenty One');
  });

  it('converts 200', function() {
    expect(numToEnglish('200')).toBe('Two hundred');
  });

  it('converts 202', function() {
    expect(numToEnglish('202')).toBe('Two hundred Two');
  });

  it('converts 220', function() {
    expect(numToEnglish('220')).toBe('Two hundred Twenty');
  });

  it('converts 222', function() {
    expect(numToEnglish('220')).toBe('Two hundred Twenty');
  });

  it('converts 999', function() {
    expect(numToEnglish('999')).toBe('Nine hundred Ninety Nine');
  });
});