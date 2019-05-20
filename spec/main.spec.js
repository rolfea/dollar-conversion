const dollarConvert = require('../main.js').dollarConvert;

describe('parses dollar amounts 1 through 9', function() {  
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

describe('parses cents', function() {
  it('converts amounts with zero cents"', function() {
    expect(dollarConvert('$2.00')).toBe('Two dollars');
  });
  
  it('converts amounts with no dollars and a base of ten cents', function() {
    for(let i = 10; i <= 90; i+= 10) {
      expect(dollarConvert(`$0.${i}`)).toBe(`Zero and ${i}/100 dollars`);
    }
  });

  it('converts amounts with a base of ten cents"', function() {
    for(let i = 10; i <= 90; i+= 10) {      
      expect(dollarConvert(`$2.${i}`)).toBe(`Two and ${i}/100 dollars`);
    }
  });

  it('converts amounts with less than ten cents"', function() {
    for(let i = 1; i <= 9; i++) {     
      expect(dollarConvert(`$2.0${i}`)).toBe(`Two and 0${i}/100 dollars`);
    }    
  });

  it('converts amounts with no dollars and base of less than ten cents', 
    function() {
      for(let i = 1; i <= 9; i++) {
        expect(dollarConvert(`$0.0${i}`)).toBe(`Zero and 0${i}/100 dollars`);
      }
    }
  );

  it('converts amounts with no dollars and cents from 11-99', function() {
    for(let i = 11; i <=99; i++) {
      expect(dollarConvert(`$0.${i}`)).toBe(`Zero and ${i}/100 dollars`);
    }
  });
})

describe('parses dollar amounts 21 through 99', function() {
  it('parses $21 dollars', function() {
    expect(dollarConvert('$21')).toBe('Twenty One dollars');
  });

  it('parses $30 dollars', function() {
    expect(dollarConvert('$30')).toBe('Thirty dollars');
  });

  it('parses $99 dollars', function() {
    expect(dollarConvert('$30')).toBe('Thirty dollars');
  });
});

describe('parses dollar amounts 100 through 999', function() {
  it('parses $100 dollars', function() {
    expect(dollarConvert('$100')).toBe('One hundred dollars');
  });

  it('parses $130 dollars', function() {
    expect(dollarConvert('$130')).toBe('One hundred Thirty dollars');
  });

  it('parses $999 dollars', function() {
    expect(dollarConvert('$999')).toBe('Nine hundred Ninety Nine dollars');
  });

  describe('parses dollar amounts 21 through 99', function() {
    it('parses $21 dollars', function() {
      expect(dollarConvert('$21')).toBe('Twenty One dollars');
    });
  
    it('parses $30 dollars', function() {
      expect(dollarConvert('$30')).toBe('Thirty dollars');
    });
  
    it('parses $999.99 dollars', function() {
      expect(dollarConvert('$999.99'))
        .toBe('Nine hundred Ninety Nine and 99/100 dollars');
    });
  });
});

describe('parses dollar amounts 1000 through 9999', function() {
  it('parses $1000 dollars', function() {
    expect(dollarConvert('$1000')).toBe('One thousand dollars');
  });

  it('parses $1010 dollars', function() {
    expect(dollarConvert('$1010')).toBe('One thousand Ten dollars');
  });

  it('parses $9999.99 dollars', function() {
    expect(dollarConvert('$9999.99'))
      .toBe('Nine thousand Nine hundred Ninety Nine and 99/100 dollars');
  });
  it('parses $2523.04', function() {
    expect(dollarConvert('$2523.04'))
    .toBe('Two thousand Five hundred Twenty Three and 04/100 dollars');
  });
});