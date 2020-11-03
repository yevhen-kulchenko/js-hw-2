const checkForSpam = function (str) {
  'use strict';
  // Write code under this line
  let spam = false;
  if (
    str.toLowerCase().includes('spam') ||
    str.toLowerCase().includes('sale')
  ) {
    spam = true;
  }
  return spam;
};

// console.log(checkForSpam('Latest technology news')); // false

// console.log(checkForSpam('JavaScript weekly newsletter')); // false

// console.log(checkForSpam('Get best sale offers now!')); // true

// console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
