function numToEnglish(strNum) {
  const num = Number.parseInt(strNum);
  
  if (num < 0) {
    throw "Numbers less than 0 are not valid.";
  }

  if (num >= 0 && num <= 19) {
    return uniqueDigits[strNum];
  }

  switch (strNum.length) {
    case 2:
      return getTwoDigit(strNum);
    case 3:
      let result;    
      let hundreds = uniqueDigits[strNum[0]];
      let tensOnes = getTwoDigit(strNum.slice(1));
        
      if (tensOnes === 'Zero') {
        result = `${hundreds} hundred`;  
      } else {
        result = `${hundreds} hundred ${tensOnes}`;
      }

      return result;
  }
}

function getTwoDigit(num) {
  parsesdNum = Number.parseInt(num);
  if ([parsesdNum] >= 0 && [parsesdNum] <= 19) {
    return uniqueDigits[[parsesdNum]];
  }

  let result;
  let tens = tensDigits[num[0]];     
  let ones = uniqueDigits[num[1]];
  
  result = ones === 'Zero' ? `${tens}` : `${tens} ${ones}`;
  return result;
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