const dollarConvert = require('../main.js').dollarConvert;

describe('parse numbers 1 through 9', function() {  
  it('converts $0 to "Zero Dollars"', function() {
    expect(dollarConvert('$0')).toBe('Zero dollars');
  });
    
  it('converts $1 to "One dollar" (singular)', function() {
    expect(dollarConvert('$1')).toBe('One dollar');
  });

  it('converts $2 to "Two Dollars"', function() {
    expect(dollarConvert('$2')).toBe('Two dollars');
  });

  it('converts $3 to "Three Dollars"', function() {
    expect(dollarConvert('$3')).toBe('Three dollars');
  });

  it('converts $4 to "Four Dollars"', function() {
    expect(dollarConvert('$4')).toBe('Four dollars');
  });

  it('converts $5 to "Five Dollars"', function() {
    expect(dollarConvert('$5')).toBe('Five dollars');
  });

  it('converts $6 to "Six Dollars"', function() {
    expect(dollarConvert('$6')).toBe('Six dollars');
  });

  it('converts $7 to "Seven Dollars"', function() {
    expect(dollarConvert('$7')).toBe('Seven dollars');
  });

  it('converts $8 to "Eight Dollars"', function() {
    expect(dollarConvert('$8')).toBe('Eight dollars');
  });

  it('converts $9 to "Nine Dollars"', function() {
    expect(dollarConvert('$9')).toBe('Nine dollars');
  });
});

describe('parse cents', function() {
  // TODO - maybe just randomize dollars 0-9
  it('converts $2.00 to "Two dollars"', function() {
    expect(dollarConvert('$2.00')).toBe('Two dollars');
  });
  
  xit('converts $2.10 to "Two and 10/100 dollars"', function() {
    expect(dollarConvert('$2.10')).toBe('Two and 10/100 dollars');
  });

  xit('converts $0.10 to "Zero and 10/100 dollars"', function() {
    expect(dollarConvert('$0.10')).toBe('Zero and 10/100 dollars');
  });
})