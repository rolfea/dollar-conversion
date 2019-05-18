function dollarConvert(dollarString) {
  const amt = getAmount(dollarString);
  const currency = amt != 'One' ? 'dollars' : 'dollar'; 

  return `${amt} ${currency}`;
}

function getAmount(dollarString) {
  let amt = '';

  splitDollarsCents = dollarString.split('.');
  const dollars = stringCardinals[splitDollarsCents[0].slice(1)];
  const cents = splitDollarsCents[1];
  
  
  if (cents === null || cents === undefined || cents == "00") {
    amt = dollars;
  } else {
    amt = `${dollars} and ${cents}/100`;
  }

  return amt;
}

const stringCardinals = {
  '0': 'Zero',
  '1': 'One',
  '2': 'Two',
  '3': 'Three',
  '4': 'Four',
  '5': 'Five',
  '6': 'Six',
  '7': 'Seven',
  '8': 'Eight',
  '9': 'Nine',
  '10': 'Ten',
  '11': 'Eleven',
  '12': 'Twelve',
  '13': 'Thirteen',
  '14': 'Fourteen',
  '15': 'Fifteen',
  '16': 'Sixteen',
  '17': 'Seventeen',
  '18': 'Eighteen',
  '19': 'Nineteen',
  '20': 'Twenty',
  '30': 'Thirty',
  '40': 'Fourty',
  '50': 'Fifty',
  '60': 'Sixty',
  '70': 'Seventy',
  '80': 'Eighty',
  '90': 'Ninety',  
};

module.exports = {
  dollarConvert: dollarConvert,
};