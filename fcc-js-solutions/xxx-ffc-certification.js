console.log('--------------------------------------------------------------------------------');
// solved: 2021-11-05 Fri 08:10 PM 
// Palindrome Checker

function palindrome(str) {

  let eraseThemAll = /[^A-Za-z0-9]/g;
  let reversedCompare = "";

  let accu = str.replace(eraseThemAll, "").toLowerCase();

  for (let i = accu.length - 1; i > -1; --i) {
    reversedCompare += accu[i]; 
  }

  if (accu === reversedCompare) 
    return true;
  else
    return false;
}

console.log(palindrome("eye"));
console.log(palindrome("_eye"));
console.log(palindrome("race car"));
console.log(palindrome("not a palindrome"));
console.log(palindrome("A man, a plan, a canal. Panama"));
console.log(palindrome("never odd or even"));
console.log(palindrome("nope"));
console.log(palindrome("almostomla"));
console.log(palindrome("My age is 0, 0 si ega ym."));
console.log(palindrome("1 eye for of 1 eye."));
console.log(palindrome("0_0 (: /-\ :) 0-0"));
console.log(palindrome("five|\_/|four"));


console.log('--------------------------------------------------------------------------------');
// solved: 2021-11-09 Tue 08:42 PM 
// Roman Numeral Converter
// Functions: placeValueHundreds, breakThemApart

function convertToRoman(num) {

  const medicalXavier = {
    1: "I",
    5: "V",
    10: "X",
    50: "L",
    100: "C",
    500: "D",
    1000: "M"
  };
 
  let masterAccu = "";

  // <--- [func-01]
  let placeValueHundreds = num => {
    let count = 0;

    while (num >= 10) {
      num /= 10;
      ++count;
    } 
    return 10**count;
  };
  // --->

  // <--- [func-02]
  let breakThemApart = num => {
    let accu = [];
    let updateIt = num;
    let playMe = 0;

    while (updateIt > 9) {
      playMe = parseInt(updateIt/placeValueHundreds(updateIt)) * placeValueHundreds(updateIt);
      accu.push(playMe);
      updateIt = updateIt - playMe;
    }
    accu.push(updateIt);

    return accu;
  };
  // ---> 
    
  // ---> [func-03]
  let theManipulation = (hundredthVal, multiplier) => {
    if (multiplier >= 1 && multiplier <= 3) {
      for (let i = 0; i < multiplier; ++i) {
        masterAccu += medicalXavier[1*hundredthVal];
      }
    }
    else if (multiplier === 4) {
      masterAccu += medicalXavier[1*hundredthVal];
      masterAccu += medicalXavier[5*hundredthVal];
    }
    else if (multiplier >= 5 && multiplier <= 8) {
      masterAccu += medicalXavier[5*hundredthVal];
      for (let i = 0; i < multiplier - 5; ++i) {
        masterAccu += medicalXavier[1*hundredthVal];
      }
    }
    else if (multiplier === 9) {
      masterAccu += medicalXavier[1*hundredthVal];
      masterAccu += medicalXavier[10*hundredthVal];
    } 
  }  
  //

  // <--- [func-04] --- final step ---
  let romanize = numArr => {

    for (let i = 0; i < numArr.length; ++i) {
      let hundredthVal = placeValueHundreds(numArr[i]);
      let multiplier = numArr[i] / placeValueHundreds(numArr[i]);

      theManipulation(hundredthVal, multiplier);
    }
  };
  // --->

  romanize(breakThemApart(num));

  return masterAccu;
}

console.log(convertToRoman(36));
console.log(convertToRoman(2));
console.log(convertToRoman(3));
console.log(convertToRoman(4));
console.log(convertToRoman(5));
console.log(convertToRoman(9));
console.log(convertToRoman(12));
console.log(convertToRoman(16));
console.log(convertToRoman(29));
console.log(convertToRoman(44));
console.log(convertToRoman(45));
console.log(convertToRoman(68));
console.log(convertToRoman(83));
console.log(convertToRoman(97));
console.log(convertToRoman(99));
console.log(convertToRoman(400));
console.log(convertToRoman(500));
console.log(convertToRoman(501));
console.log(convertToRoman(649));
console.log(convertToRoman(798));
console.log(convertToRoman(891));
console.log(convertToRoman(1000));
console.log(convertToRoman(1004));
console.log(convertToRoman(1006));
console.log(convertToRoman(1023));
console.log(convertToRoman(2014));
console.log(convertToRoman(3999));


console.log('--------------------------------------------------------------------------------');
// solved: 2021-11-11 Thu 05:50 PM 
// Caesars Cipher 

function rot13(str) {

  let upperTier = /[A-M]/;  // 65-77
  let lowerTier = /[N-Z]/;  // 78-90

  let masterAccu = str.split("").map((theChar, index) => {
    let inverse = 0;
    if (upperTier.test(theChar)) {
      inverse = str.charCodeAt(index) + 13;
      return String.fromCharCode(inverse);
    }
    else if (lowerTier.test(theChar)) {
      inverse = str.charCodeAt(index) - 13;
      return String.fromCharCode(inverse);
    }
    else {
      return String.fromCharCode(str.charCodeAt(index));
    }
  })
  .join("");

  return masterAccu;
}

console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("SERR CVMMN!"));
console.log(rot13("SERR YBIR?"));
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));


console.log('--------------------------------------------------------------------------------');
// solved: 2021-11-16 Tue 08:34 PM 
// Telephone Number Validator 

function telephoneCheck(str) {

  let myReg = /^(\(\d{3}\)|\d{3})(\s|-)?\d{3}(\s|-)?\d{4}$/;
  let myRegWithCountryCode = /^\d\s?(\(\d{3}\)|\d{3})(\s|-)?\d{3}(\s|-)?\d{4}$/;
  let matchReg = /^\d/;
  let accuCode = [];

  if (myRegWithCountryCode.test(str)) {
    accuCode = str.match(matchReg);
    if (accuCode[0] === '1') {
      return true;
    }
    else {
      return false;
    }
  }
  else if (myReg.test(str)) {
    return true;
  }
  else {
    return false;
  }
}

// TRUE
console.log(telephoneCheck("1 555-555-5555"));
console.log(telephoneCheck("1 (555) 555-5555"));
console.log(telephoneCheck("5555555555"));
console.log(telephoneCheck("555-555-5555"));
console.log(telephoneCheck("(555)555-5555"));
console.log(telephoneCheck("1(555)555-5555"));
// FALSE 
console.log(telephoneCheck("555-5555"));
console.log(telephoneCheck("5555555"));
console.log(telephoneCheck("1 555)555-5555"));
// TRUE
console.log(telephoneCheck("1 555 555 5555"));
console.log(telephoneCheck("1 456 789 4444"));
// FALSE 
console.log(telephoneCheck("123**&!!asdf#"));
console.log(telephoneCheck("55555555"));
console.log(telephoneCheck("(6044756961)"));
console.log(telephoneCheck("2 (757) 622-7382"));  
console.log(telephoneCheck("0 (757) 622-7382")); 
console.log(telephoneCheck("-1 (757) 622-7382"));
console.log(telephoneCheck("2 757 622-7382")); 
console.log(telephoneCheck("10 (757) 622-7382"));
console.log(telephoneCheck("27576227382"));  
console.log(telephoneCheck("(275)76227382"));
console.log(telephoneCheck("2(757)6227382"));
console.log(telephoneCheck("2(757)622-7382"));
console.log(telephoneCheck("555)-555-5555"));
console.log(telephoneCheck("(555-555-5555"));
console.log(telephoneCheck("(555)5(55?)-5555"));
console.log(telephoneCheck("55 55-55-555-5"));


console.log('--------------------------------------------------------------------------------');
// solved: 2021-11-22 Mon 08:33 PM 
// Cash Register
// Functions: drawerCheck, toArray

function checkCashRegister(price, cash, cid) {
  let monies = {
    "ONE HUNDRED": 100, 
    TWENTY: 20,
    TEN: 10,
    FIVE: 5,
    ONE: 1,
    QUARTER: 0.25,
    DIME: 0.1,
    NICKEL: 0.05,
    PENNY: 0.01
  };

  let change = cash - price;
  let accuCID = {};
  let changeAccu = {};

  cid.map(a => {
    accuCID[a[0]] = a[1];
  });

  let endResult = {status: "", change: []};

    /* test func => empty drawer
      let emptyDrawer = cid => {
        for (key in accuCID) {
          accuCID[key] = 0; 
        }
      };
    */
    //emptyDrawer(accuCID);

  // <--- [func-01] --- true => draw not empty | false => drawer empty
  let drawerCheck = accuCid => {
    for (let key in accuCID) {
      if (accuCID[key] !== 0) {
        return true;
      }
    }
    return false;
  };
  // --->

  while (change > 0) {

    for (let key in monies) {

      if (change >= monies[key]) {

        if (key === "PENNY" && change > accuCID[key]) {
          endResult.status = "INSUFFICIENT_FUNDS";
          endResult.change = [];
          return endResult; 
        }

        if (accuCID[key] >= monies[key] && drawerCheck(accuCID) === true) {
          change -= monies[key];
          change = Math.round(change*100)/100;
          
          if (changeAccu.hasOwnProperty(key)) {
            accuCID[key] -= monies[key];
            accuCID[key] = Math.round(accuCID[key]*100)/100;
            changeAccu[key] += monies[key];
            changeAccu[key] = Math.round(changeAccu[key]*100)/100;
            break;
          }
          else {
            accuCID[key] -= monies[key];
            accuCID[key] = Math.round(accuCID[key]*100)/100;
            changeAccu[key] = monies[key];
            changeAccu[key] = Math.round(changeAccu[key]*100)/100;
            break;
          }
        }
      }
      else {
      }
    }
  }

  // <--- [func-02]  // to collect obj to array
  let toArray = obj => {
    for (let keys in obj) {
      endResult.change.push([keys, obj[keys]]);
    }
  }

  toArray(changeAccu);

  if (!drawerCheck(accuCID)) {
    endResult.change = cid.slice();
    endResult.status = "CLOSED";
  }
  else {
    endResult.status = "OPEN";
  }

  return endResult;
}

// status: "TEST"
/*
console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
*/
// status: "OPEN"
console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
// status: "OPEN"
console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
// status: "INSUFFICIENT_FUNDS"
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
// status: "INSUFFICIENT_FUNDS"
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
// status: "CLOSED"
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));

console.log('--------------------------------------------------------------------------------');





















