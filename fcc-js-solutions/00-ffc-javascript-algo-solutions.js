
// 2021-08-16 Mon 01:09 AM

// FCC Basic Algorithm Scripting 

console.log('---------------------------------------------------------------------------------------------------------');
// Confirm Ending

function confirmEnding(str, target) {
    const theStartTarget = str.length - target.length;
    const theEndTarget = theStartTarget + target.length;

    if (str.slice(theStartTarget, theEndTarget) === target) {
        return true;
    }
    else {
        return false;
    }

    return str;
}

console.log(confirmEnding("Bastian", "n"));
console.log(confirmEnding("Congratulation", "on"));
console.log(confirmEnding("Connor", "n"));
console.log(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification"));
console.log(confirmEnding("Open sesame", "same"));
console.log(confirmEnding("Open sesame", "sage"));
console.log(confirmEnding("Open sesame", "game"));
console.log(confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain"));
console.log(confirmEnding("Abstraction", "action"));

console.log('---------------------------------------------------------------------------------------------------------');
// Repeat a string Repeat a string

function repeatStringNumTimes(str, num) {
  if (num <= 0)
    return '';
  
  const accumulator = str;

  for (let i = 0; i < num - 1; ++i) {
    str += accumulator;
  }
  
  return str;
}

console.log(repeatStringNumTimes("abc", 3));
console.log(repeatStringNumTimes("abc", 9));
console.log(repeatStringNumTimes("abc", -2));
console.log(repeatStringNumTimes("*", 8));
console.log(repeatStringNumTimes("abc", 0));
console.log(repeatStringNumTimes("*", 3));

console.log('---------------------------------------------------------------------------------------------------------');
// Truncate a string

function truncateString(str, num) {
  let iAccumulate = '';

  let specialCondNum = 0;

  if (num > str.length) {
    specialCondNum = str.length;
  }
  else {
    specialCondNum = num;
  }

  for (let i = 0; i < specialCondNum; ++i) {
    iAccumulate += str[i];
  }
  
  if (num < str.length)
    iAccumulate += '...';

  return iAccumulate;
}

console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11));
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2));
console.log(truncateString("A-", 1));
console.log(truncateString("Absolutely Longer", 2));

console.log('---------------------------------------------------------------------------------------------------------');
// Finders Keepers

function findElement(arr, func) {
  for (let i = 0; i < arr.length; ++i) {
    if (func(arr[i]))
      return arr[i];
  }
  
  return undefined;
}

console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));
console.log(findElement([1, 3, 4], num => num % 2 === 0));
console.log(findElement([1, 3, 5], num => num % 2 === 0));
console.log(findElement([45, 23, 56, 69], num => num % 2 === 0));
console.log(findElement([1997, 1833, 1677, 2008], num => num % 2 === 0));

console.log('---------------------------------------------------------------------------------------------------------');
// Boo Who 

function booWho(bool) {
  if (bool === true || bool === false) {
    return true;
  }
  else {
    return false;
  }
}

console.log(booWho(true));
console.log(booWho(false));
console.log(booWho([1, 2, 3]));
console.log(booWho([].slice));
console.log(booWho({ "a": 1 }));
console.log(booWho(1));
console.log(booWho(NaN));
console.log(booWho("a"));
console.log(booWho("true"));
console.log(booWho("false"));

console.log('---------------------------------------------------------------------------------------------------------');
// Just a slice and splice practice 

const myArray1 = [ 'hello', 'its me', 'ive been', 'ha!?!?!', 'ehhh! ?!?!??' ];
const myArray2 = [ 'hello', 'its me', 'ive been', 'ha!?!?!', 'ehhh! ?!?!??' ];
console.log(myArray1);
console.log(myArray2);

const accuSplice = myArray1.splice(1, 3);
const accuSlice = myArray2.slice(1, 3);

console.log(accuSplice);   // original is mutated after splice   
console.log(accuSlice);    // original is immutable

console.log(myArray1);
console.log(myArray2);

console.log('---------------------------------------------------------------------------------------------------------');
// Title case a sentence 

function titleCase(str) {

  // Lower case all chars first 
  const toLowEverything = (str) => {
    const accuToLow = [...str];
    let accuToLowResult = "";

    for(let i = 0; i < str.length; ++i) {
      accuToLowResult += accuToLow[i].toLowerCase();
    }
    return accuToLowResult;
  };
  
  const loweredCaseResult = toLowEverything(str);
  let resulting = "";
 
  // let the title casing begin ! 
  for (let i = 0; i < loweredCaseResult.length; ++i) {
    if (i === 0)
      resulting += loweredCaseResult[i].toUpperCase();
    else
      resulting += loweredCaseResult[i];

    if (loweredCaseResult[i] === " ") {
      ++i;
      resulting += loweredCaseResult[i].toUpperCase();
    }
  }
  
  return resulting;
}

console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("sHoRt AnD sToUt"));
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));

console.log('---------------------------------------------------------------------------------------------------------');
// Slice and splice 

function frankenSplice(arr1, arr2, n) {
  const resulting = arr2.slice(0, arr2.length);
  const accu = resulting.splice(n, arr2.length);
  resulting.push(...arr1);
  resulting.push(...accu);

  return resulting;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
console.log(frankenSplice([1, 2], ["a", "b"], 1));
console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2));

console.log('---------------------------------------------------------------------------------------------------------');
// Falsy bouncer

function bouncer(arr) {
  let accuResult = [];
  const falsyBox = [ false, null, 0, "", undefined, NaN ]; 
  
  for (let i in arr) {
    if(arr[i])
      accuResult.push(arr[i])
  }

  return accuResult;
}

console.log(bouncer([7, "ate", "", false, 9]));
console.log(bouncer(["a", "b", "c"]));
console.log(bouncer([false, null, 0, NaN, undefined, ""]));
console.log(bouncer([null, NaN, 1, 2, undefined]));

console.log('---------------------------------------------------------------------------------------------------------');
// Where do i belong

function getIndexToIns(arr, num) {

  // function to sort array of numbers from smallest to biggest
  let sortSmallToBig = (arr, num) => {
 
    let accuResult = [];
    arr.push(num);
    let bufferCompare = arr.slice();
    let bufferNewCompare = [];
    let whenThereIsMoreSmallsFlag = 1;
 
    let smallest = arr[0];
 
    for (let i in arr) {
 
      // --- loop 1
      for (let j in bufferCompare) {
        if (smallest === bufferCompare[j] && j > 0) {
          ++whenThereIsMoreSmallsFlag;
        }
        if (smallest > bufferCompare[j]) {
          smallest = bufferCompare[j];
          whenThereIsMoreSmallsFlag = 1;  // reset this flag when found another lowest number
        }
      }

      // --- loop 2
      for (let j in bufferCompare) {
        if (smallest < bufferCompare[j]) {
          bufferNewCompare.push(bufferCompare[j]);
        }
      }

      if (whenThereIsMoreSmallsFlag > 1) {
        for (let k = 0; k < whenThereIsMoreSmallsFlag; ++k) {
          accuResult.push(smallest);
        }
      }
      else {
        accuResult.push(smallest);
      }

      if (bufferNewCompare.length == 0) {
        break;
      }

      bufferCompare = [];  // reset
      bufferCompare = bufferNewCompare.slice();  // reinitialize
      smallest = bufferNewCompare[0];  // reinitialize
      bufferNewCompare = [];  // reset 
      whenThereIsMoreSmallsFlag = 1;  //reset
    }
 
    return accuResult;
  }
  // ------------------------------------------------
   
  const theSortedOne = sortSmallToBig(arr, num);

  return theSortedOne.indexOf(num);
}

console.log(getIndexToIns([10, 20, 30, 40, 50], 35));
console.log(getIndexToIns([10, 20, 30, 40, 50], 30));
console.log(getIndexToIns([40, 60], 50));
console.log(getIndexToIns([3, 10, 5], 3));
console.log(getIndexToIns([5, 3, 20, 3], 5));
console.log(getIndexToIns([2, 20, 10], 19));
console.log(getIndexToIns([2, 5, 10], 15));
console.log(getIndexToIns([], 1));

console.log('---------------------------------------------------------------------------------------------------------');
// Mutations 

function mutation(arr) {

  const firstStrEle = [...arr[0]];
  const secondStrEle = [...arr[1]];

  let accuFirst = "";
  let accuSecond = ""; 

  for (let i = 0; i < firstStrEle.length; ++i) {
    accuFirst += firstStrEle[i].toLowerCase();
  }

  for (let i = 0; i < secondStrEle.length; ++i) {
    accuSecond += secondStrEle[i].toLowerCase();
  }
  
  let matchFoundFlag = 0;

  for (let i = 0; i < accuSecond.length; ++i) {
    for (let j = 0; j < accuFirst.length; ++j) {
      if (accuSecond[i] === accuFirst[j]) {
        matchFoundFlag = 1;
      }
    }
    if (matchFoundFlag) {
      matchFoundFlag = 0;
    }
    else {
      return false;
    }
  }

  return true;
}

console.log(mutation(["hello", "hey"]));
console.log(mutation(["hello", "Hello"]));
console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));
console.log(mutation(["Mary", "Army"]));
console.log(mutation(["Mary", "Aarmy"]));
console.log(mutation(["Alien", "line"]));
console.log(mutation(["floor", "for"]));
console.log(mutation(["hello", "neo"]));
console.log(mutation(["voodoo", "no"]));
console.log(mutation(["ate", "date"]));
console.log(mutation(["Tiger", "Zebra"]));
console.log(mutation(["Noel", "Ole"]));

console.log('---------------------------------------------------------------------------------------------------------');
// Chunky Monkey 

function chunkArrayInGroups(arr, size) {

  let totalSlices;

  if (arr.length % size === 0) {
    totalSlices = arr.length / size;
  }
  else {
    totalSlices = (arr.length / size) + 1;
  }

  let masterAccu = [];
  let tempAccu = [];
  let sliceStart = 0;
  let sliceEnd = size;

  for (let i = 0; i < totalSlices; ++i) {
    tempAccu = arr.slice(sliceStart, sliceEnd);
    
    if (tempAccu.length === 0) {
      break;
    }

    masterAccu.push(tempAccu);
    sliceStart += size;
    sliceEnd += size;
  }

  return masterAccu;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2));










































