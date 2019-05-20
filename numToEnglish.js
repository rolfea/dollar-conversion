function numToEnglish(strNum) {
  // count number of digits
  // break number into array of groups of <= 3 digits
  // 1 => [1], 21 => [21], 123 => [123], 1234 => [1], [234]
  const num = Number.parseInt(strNum);
  
  // nothing less than 0
  if (num < 0) {
    throw "Numbers less than 0 are not valid.";
  }

  // handle numbers 0 - 19 directly
  if (num >= 0 && num <= 19) {
    return uniqueDigits[strNum];
  }

  switch (strNum.length) {
    case 2:
      let tens = tensDigits[strNum[0]];      
      let ones = uniqueDigits[strNum[1]];
      
      return  ones === 'Zero' ? `${tens}` : `${tens} ${ones}`;
        
  }
}

const uniqueDigits = [
  'Zero',
  'One',
  'Two',
  'Three',
  'Four',
  'Five',
  'Six',
  'Seven',
  'Eight',
  'Nine',
  'Ten',
  'Eleven',
  'Twelve',
  'Thirteen',
  'Fourteen',
  'Fifteen',
  'Sixteen',
  'Seventeen',
  'Eighteen',
  'Nineteen',
];
  
const tensDigits = [
  '',
  'Ten',
  'Twenty',
  'Thirty',
  'Fourty',
  'Fifty',
  'Sixty',
  'Seventy',
  'Eighty',
  'Ninety',  
];
  


module.exports = {
  numToEnglish: numToEnglish,
};