function dollarConvert(dollarString) {
  const num = dollarString.slice(1);
  const amt = getStringCardinal(num);
  const currency = amt != 'One' ? 'dollars' : 'dollar'; 
  return `${amt} ${currency}`;
}

function getStringCardinal(number) {
  return stringCardinals[number];
}

const stringCardinals = {
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