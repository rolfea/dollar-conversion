function dollarConvert(dollarString) {
  const amt = getAmount(dollarString);
  const currency = amt != 'One' ? 'dollars' : 'dollar'; 

  return `${amt} ${currency}`;
}

function getAmount(dollarString) {
  let amt = '';

  splitDollarsCents = dollarString.split('.');
  const dollars = stringCardinals[splitDollarsCents[0].slice(1)];
  const cents = stringCardinals[splitDollarsCents[1]];
  
  if (cents === null || cents === undefined) {
    amt = dollars;
  } else {
    amt = `${dollars} and ${cents}`;
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
};

module.exports = {
  dollarConvert: dollarConvert,
};