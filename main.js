const numToEnglish = require('./numToEnglish.js').numToEnglish;

function dollarConvert(dollarString) {
  const amt = getAmount(dollarString);
  const currency = amt != 'One' ? 'dollars' : 'dollar'; 

  return `${amt} ${currency}`;
}

function getAmount(dollarString) {
  let amt = '';
  let splitDollarsCents = [];

  splitDollarsCents = dollarString.split('.');
  const dollars = getDollars(splitDollarsCents[0].slice(1));
  const cents = splitDollarsCents[1];

  return noCents(cents) ? dollars : `${dollars} and ${cents}/100`;
}

function getDollars(dollarAmt) {
  return numToEnglish(dollarAmt);
}


function noCents(cents) {
  return cents === null || cents === undefined || cents === "00"
}

module.exports = {
  dollarConvert: dollarConvert,
};