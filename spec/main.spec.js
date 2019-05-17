const dollarConvert = require('../main.js').dollarConvert;

describe('parse numbers 1 through 9', function() {  
  it('converts $1 to "One dollar" (singular)', function() {
    expect(dollarConvert('$1')).toBe('One dollar');
  });

  it('converts $2 to "Two Dollars"', function() {
    expect(dollarConvert('$2')).toBe('Two dollars');
  });

  it('converts $3 to "Three Dollars"', function() {
    expect(dollarConvert('$2')).toBe('Two dollars');
  });

  it('converts $4 to "Four Dollars"', function() {
    expect(dollarConvert('$2')).toBe('Two dollars');
  });

  it('converts $5 to "Five Dollars"', function() {
    expect(dollarConvert('$2')).toBe('Two dollars');
  });

  it('converts $6 to "Six Dollars"', function() {
    expect(dollarConvert('$2')).toBe('Two dollars');
  });

  it('converts $7 to "Seven Dollars"', function() {
    expect(dollarConvert('$2')).toBe('Two dollars');
  });

  it('converts $8 to "Eight Dollars"', function() {
    expect(dollarConvert('$2')).toBe('Two dollars');
  });

  it('converts $9 to "Nine Dollars"', function() {
    expect(dollarConvert('$2')).toBe('Two dollars');
  });
});