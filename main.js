function dollarConvert(dollarString) {
  const num = dollarString.slice(1);
  return `${getStringCardinal(num)} dollars`;
}

function getStringCardinal(number) {
  return stringCardinals[number];
}

const stringCardinals = {
  '2': 'Two'
};

module.exports = {
  dollarConvert: dollarConvert,
};