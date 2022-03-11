console.log('--------------------------------------------------------------------------------');
// solved: 2021-09-22 Wed 09:44 AM
// Seek and Destroy

function destroyer(arr) {

  let newArr = [];
  let [a, ...addArguAccu] = arguments;
  
  a.forEach(x => {
    for (let i = 0; i < addArguAccu.length; ++i) {
      if (x === addArguAccu[i]) {
        return NaN;
      }
    }

    return newArr.push(x);
  });
  // console.log(a);
  return newArr;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5));
console.log(destroyer([2, 3, 2, 3], 2, 3));
console.log(destroyer(["tree", "hamburger", 53], "tree", 53));
console.log(destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan"));


console.log('--------------------------------------------------------------------------------');
// solved: 2021-09-26 Sun 10:08 PM  
// Wherefore art thou 

function whatIsInAName(collection, source) {
  var arr = [];
  // Only change code below this line
  let sauceKeys = Object.keys(source);

  arr = collection.filter(a => {
        
    for (let i = 0; i < sauceKeys.length; ++i) { 
      if (a.hasOwnProperty(sauceKeys[i]) === false) {
        return false;
      }
      else {
        if (a[sauceKeys[i]] !== source[sauceKeys[i]]) {
          return false;
        }
      }
    }

    return true;
  });
  
  // Only change code above this line
  return arr;
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
console.log(whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 }));
console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }));
console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }));
console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 }));
console.log(whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3}));

// [{ first: "Tybalt", last: "Capulet" }]
// [{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }]
// [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }]
// [{ "apple": 1, "bat": 2, "cookie": 2 }]
// [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }]
// []


console.log('--------------------------------------------------------------------------------');
// solved: 2021-09-27 Mon 10:56 PM
// Spinal Tap Case 

function spinalCase(str) {

  let newArr = []; 
  let countSpaces = 0;
  let forSplitting = /[_, ' ', -, \W]/;
  let forReplacingUpper = /([a-z])([A-Z])/g;
  
  for (let i = 0; i < str.length; ++i) {
    if (str[i] === ' ') {
      countSpaces++;
    }
    else {
      break;
    }
  }

  newArr = str.replace(forReplacingUpper, "$1 $2")
              .slice(countSpaces)
              .split(forSplitting)
              .map(a => a.toLowerCase())
              .join('-');

  return newArr;
}

console.log(spinalCase('This Is Spinal Tap'));
console.log(spinalCase('thisIsSpinalTap'));
console.log(spinalCase("The_Andy_Griffith_Show"));
console.log(spinalCase("Teletubbies say Eh-oh"));
console.log(spinalCase("AllThe-small Things"));


console.log('--------------------------------------------------------------------------------');
// solved: 2021-10-02 Sat 09:04 PM
// Pig Latin

function translatePigLatin(str) {
  
  let theAy = 'ay';  // if consonant
  let theWay = 'way';  // if vowel
  let theVowelsRegex = /^[aeiou]$/;
  let letThemSpread = [...str];

  let countConsonants = 0;
  let allConsonants = '';

  if (theVowelsRegex.test(letThemSpread[0])) {
    return str.concat(theWay); 
  }
  else {
    for (let i = 0; i < str.length; ++i) {
      if (!theVowelsRegex.test(str[i])) {
        countConsonants++;
      } 
      else {
        break;
      }
    }

    let newArr = str.slice(countConsonants);
    allConsonants = str.slice(0, countConsonants).concat(theAy);

    return newArr.concat(allConsonants);
  }
}

console.log(translatePigLatin('consonant'));
console.log(translatePigLatin('california'));
console.log(translatePigLatin('paragraphs'));
console.log(translatePigLatin('glove'));
console.log(translatePigLatin('algorithm'));
console.log(translatePigLatin('eight'));
console.log(translatePigLatin('schwartz'));
console.log(translatePigLatin('rhythm'));


console.log('--------------------------------------------------------------------------------');
// solved: 2021-10-02 Sat 10:45 PM 
// Search and Replace

function myReplace(str, before, after) {
  let newArr = str.split(' ');
  let newAfter = '';

  let uppersRegX = /^[ABCDEFGHIJKLMNOPQRSTUVWXYZ]/;
  
  if (uppersRegX.test(before)) {
    newAfter = after[0].toUpperCase()
                       .concat(after.slice(1));
  }
  else {
    newAfter = after[0].toLowerCase()
                       .concat(after.slice(1));
  }

  return str.replace(before, newAfter);
}

console.log('original: ' + "A quick brown fox jumped over the lazy dog");
console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
console.log('original: ' + "Let us go to the store");
console.log(myReplace("Let us go to the store", "store", "mall"));
console.log('original: ' + "He is Sleeping on the couch");
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
console.log('original: ' + "I think we should look up there");
console.log(myReplace("I think we should look up there", "up", "Down"));
console.log('original: ' + "This has a spellngi error");
console.log(myReplace("This has a spellngi error", "spellngi", "spelling"));
console.log('original: ' + "His name is Tom");
console.log(myReplace("His name is Tom", "Tom", "john"));
console.log('original: ' + "Let us get back to more Coding");
console.log(myReplace("Let us get back to more Coding", "Coding", "algorithms"));


console.log('--------------------------------------------------------------------------------');
// solved: 2021-10-03 Sun 05:58 PM 
// DNA Pairing 

function pairElement(str) {

  let finalAccu = [];
  let accuEach = [];

  for (let i = 0; i < str.length; ++i) {
    switch (str[i]) {
      case 'A': 
        accuEach.push(str[i])
        accuEach.push('T');
        break;
      case 'T': 
        accuEach.push(str[i])
        accuEach.push('A');
        break;
      case 'G': 
        accuEach.push(str[i])
        accuEach.push('C');
        break;
      case 'C': 
        accuEach.push(str[i])
        accuEach.push('G');
        break;
      default: 
        break;
    }

    finalAccu.push(accuEach);
    accuEach = [];
  }

  return finalAccu;
}

console.log(pairElement("ATCGA"));
console.log(pairElement("TTGAG"));
console.log(pairElement("CTCTA"));


console.log('--------------------------------------------------------------------------------');
// solved: 2021-10-03 Sun 07:11 PM 
// Missing letters

function fearNotLetter(str) {

  let complete = "abcdefghijklmnopqrstuvwxyz";
  
  let start = complete.indexOf(str[0]); 

  for (let i = 0; i < str.length; ++i) {
    if (complete[start + i] !== str[i]) {
      return complete[start + i];
    }
  }

  return undefined;
}

console.log(fearNotLetter("abce"));
console.log(fearNotLetter("abcdefghjklmno"));
console.log(fearNotLetter("stvwx"));
console.log(fearNotLetter("bcdf"));
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));


console.log('--------------------------------------------------------------------------------');
// solved: 2021-10-04 Mon 09:36 PM  
// Sorted Union 

function uniteUnique(arr) {

  let initAccu = [...arguments];
  let masterAccu = [];

  initAccu.map(a => {
                      for (let i = 0; i < a.length; ++i) {
                        if (masterAccu.indexOf(a[i]) < 0) {
                          masterAccu.push(a[i]);
                        }
                      }
                        return a;
                    });

  return masterAccu;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
console.log(uniteUnique([1, 2, 3], [5, 2, 1]));
console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]));


console.log('--------------------------------------------------------------------------------');
// solved: 2021-10-05 Tue 08:55 PM  
// Convert HTML Entities  

function convertHTML(str) {

  let masterAccu = str.split('');

  for (let i = 0; i < masterAccu.length; ++i) {
    switch (masterAccu[i]) {
      case '&':
        masterAccu[i] = '&amp;';
        break;
      case '<':
        masterAccu[i] = '&lt;';
        break;
      case '>':
        masterAccu[i] = '&gt;';
        break;
      case '"':
        masterAccu[i] = '&quot;';
        break;
      case "'":
        masterAccu[i] = '&apos;';
        break;
      default:
        break;
    };
  }

  return masterAccu.join('');
}

console.log(convertHTML("Dolce & Gabbana"));
console.log(convertHTML("Hamburgers < Pizza < Tacos"));
console.log(convertHTML("Sixty > twelve"));
console.log(convertHTML('Stuff in "quotation marks"'));
console.log(convertHTML("Schindler's List"));
console.log(convertHTML("<>"));
console.log(convertHTML("abc"));


console.log('--------------------------------------------------------------------------------');
// solved: 2021-10-05 Tue 10:15 PM  
// Sum All Odd Fibonacci Numbers

function sumFibs(num) {

  let fibMasterAccu = [1, 1];
  let currentSum = 0;

  currentSum = fibMasterAccu[fibMasterAccu.length - 1] + fibMasterAccu[fibMasterAccu.length - 2];

  while (currentSum <= num) {
    fibMasterAccu.push(currentSum);
    currentSum = fibMasterAccu[fibMasterAccu.length - 1] + fibMasterAccu[fibMasterAccu.length - 2];
  }

  return fibMasterAccu.reduce(((a, b) => {
    if (b % 2 !== 0) {
      a+=b;
    }

    return a;
  }), 0);
}

console.log(sumFibs(1));
console.log(sumFibs(1000));
console.log(sumFibs(4000000));
console.log(sumFibs(4));
console.log(sumFibs(75024));
console.log(sumFibs(75025));


console.log('--------------------------------------------------------------------------------');
// solved: 2021-10-06 Wed 09:02 PM  
// Sum All Primes

function sumPrimes(num) {

  let primeAccu = [];
  let antiPrimeDetect = true;

  // if remainder is 0 . then not prime

  for (let i = 1; i <= num; ++i) {
    for (let j = 1; j <= i; ++j) {
      if (i % j === 0 && j !== 1 && j !== i) {
        antiPrimeDetect = false;
        break;
      }
    }

    if (antiPrimeDetect && i !== 1) {
      primeAccu.push(i);
    }
    else {
      antiPrimeDetect = true;  // reset
    }
  }

  return primeAccu.reduce((a, b) => a + b);
}

console.log(sumPrimes(10));
console.log(sumPrimes(977));


console.log('--------------------------------------------------------------------------------');
// solved: 2021-10-18 Mon 09:47 PM  
// Smallest Common Multiple
// functions: primeNumOffset, primeFactorsFinder, setFactors, lcm

function smallestCommons(arr) {

  let [max, min] = arr.sort((a, b) => b - a);
    
  let newArr = [];
  let primeFactors = [];

  // <--- newArr accumulation
  for (let i = max; i >= min; --i) {
    newArr.push(i);
  }
  // --->

  // <--- [func-01] prime checker 
  let primeNumOffset = num => {

    num++;
    let i = 2;

    while (i <= num) {
      if (num % i === 0 && i !== num) {
        num++;
        i = 1;
      }
      i++;
    }

    return num;
  }
  // --->

  // <--- [func-02] prime factors finder
  let primeFactorsFinder = num => {
    let factors = [];
    let initPrimeDivisor = 2;
    let duplicateFlag = false;
    
    while (num !== 1) {
      if (num % initPrimeDivisor === 0) {
        factors.push(initPrimeDivisor);
        num /= initPrimeDivisor;
      }
      else {
        initPrimeDivisor = primeNumOffset(initPrimeDivisor);
      }
    }

    return factors;
  }  
  // ---> 

  // <--- [func-03] prime factor them all
  let setFactors = arr => {
    let result = arr.map(a => {
      if (a === 1) {
        return [1];
      }
      return primeFactorsFinder(a);
    });
    return result;
  }   
  // --->

  primeFactors = setFactors(newArr);

  // <--- [func-04] finalization
  let lcm = insertFactors => { 
    let toCompare = [];
    let finalAccu = [];
    let count = 0;
    let totCount = 0;
    // map 1
    insertFactors.map(eachFactors => {
      // map 2
      eachFactors.map(z => {
        if (toCompare.indexOf(z) < 0) {
          toCompare.push(z);
          // map 3
          insertFactors.map(a => {
            // map 4
            a.map(b => {
              if (z === b) {
                count++;
              }
            });

            if (count >= totCount) {
              totCount = count;
            }

            count = 0;
          });

          finalAccu.push(z**totCount);
          totCount = 0;
        }
      });
    });
    // --->

    let finalAnswer = finalAccu.reduce((z, x) => z * x);

    return finalAnswer;
  }

  return lcm(primeFactors);
}

console.log(smallestCommons([1, 5]));  // 60
console.log(smallestCommons([5, 1]));  // 60
console.log(smallestCommons([2, 10]));  // 2520
console.log(smallestCommons([1, 13]));  // 360360
console.log(smallestCommons([23, 18]));  // 6056820


console.log('--------------------------------------------------------------------------------');
// solved: 2021-10-19 Tue 10:58 PM  
// Drop It

function dropElements(arr, func) {

  let theStart = 0;

  for (let i = 0; i < arr.length; ++i) {
    if (func(arr[i])) {
      theStart = arr.indexOf(arr[i]);
      return arr.slice(theStart);
    }
  }

  return [];
}

console.log(dropElements([1, 2, 3], function(n) {return n < 3;}));
console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3;})); 
console.log(dropElements([0, 1, 0, 1], function(n) {return n === 1;}));
console.log(dropElements([1, 2, 3], function(n) {return n > 0;}));
console.log(dropElements([1, 2, 3, 4], function(n) {return n > 5;}));
console.log(dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}));
console.log(dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}));


console.log('--------------------------------------------------------------------------------');
// solved: 2021-11-02 Tue 03:24 PM  
// Steamroller
// functions: diveInToArray 

function steamrollArray(arr) {

  let masterAccu = [];

  // <--- [func-01] array inceptor 
  let diveInToArray = z => {

    let i = 0, j = 0;
    let update = z.slice();

    for (let i = 0; i < update.length; ++i) {
      if (typeof(update[i]) === 'object' && update[i].length > 0) {
        update = update[i].slice();
        i = -1;
      }
      else {
        if (update[i].length !== 0) {
          masterAccu.push(update[i]);
        }
      }
    }

    return update; 
  }
  // ---> 

  arr.map(x => {
    let resultingArr = [];

    if (typeof(x) === 'object' && x.length > 0) {
      resultingArr = diveInToArray(x); 
    }
    else {
      if (x.length !== 0) {
        masterAccu.push(x);
      }
    }
  });

  return masterAccu;
}

console.log(steamrollArray([[["a"]], [["b"]]]));
console.log(steamrollArray([1, [2], [3, [[4]]]]));
console.log(steamrollArray([1, [], [3, [[4]]]]));
console.log(steamrollArray([1, {}, [3, [[4]]]]));


console.log('--------------------------------------------------------------------------------');
// solved: 2021-11-02 Tue 03:49 PM 
// Binary Agents

function binaryAgent(str) {

  let accu = str
    .split(" ")
    .map(a => {
      let toDecimal = parseInt(a, 2); 
      return String.fromCharCode(toDecimal);
    })
    .join("");

  return accu;
}

console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));
console.log(binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001"));


console.log('--------------------------------------------------------------------------------');
// solved: 2021-11-02 Tue 07:57 PM  
// Everything Be True

function truthCheck(collection, pre) {

  for (let i = 0; i < collection.length; ++i) {
    if (!collection[i].hasOwnProperty(pre) || !collection[i][pre]) {
      return false;
    }
  }

  return true;
}

console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"));
console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"));
console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age"));
console.log(truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastForward", "onBoat": null}], "onBoat"));
console.log(truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastForward", "onBoat": true}], "onBoat"));
console.log(truthCheck([{"single": "yes"}], "single"));
console.log(truthCheck([{"single": ""}, {"single": "double"}], "single"));
console.log(truthCheck([{"single": "double"}, {"single": undefined}], "single"));
console.log(truthCheck([{"single": "double"}, {"single": NaN}], "single"));


console.log('--------------------------------------------------------------------------------');
// solved: 2021-11-02 Tue 09:48 PM  
// Arguments Optional

function addTogether() {

  if (arguments.length === 2) {
    for (let i = 0; i < arguments.length; ++i) {
      if (typeof(arguments[i]) !== 'number') {
        return undefined;
      }
    }

    let [a, b] = [...arguments];
    return a + b;
  }
  
  if (arguments.length === 0) {
    return undefined;
  }

  let first = arguments[0];
  if (typeof(first) !== 'number') 
    return undefined;

  return function(second) {
    if (typeof(second) !== 'number') 
      return undefined;
    return first + second;
  }
}

console.log(addTogether(2, 3));
console.log(addTogether(23, 30));
console.log(addTogether(5)(7));
console.log(addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ"));
console.log(addTogether(2, "3"));
console.log(addTogether(2)([3]));


console.log('--------------------------------------------------------------------------------');
// solved: 2021-11-03 Wed 09:23 PM  
// Make a Person

const Person = function(firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  var theFull = firstAndLast;
    
  this.getFullName = function() {
    return theFull;
  };

  this.getFirstName = function() {
    let accu = theFull.split(" ");
    return accu[0];
  };

  this.getLastName = function() {
    let accu = theFull.split(" ");
    return accu[1];
  };

  this.setFullName = function(firstAndLast) {
    theFull = firstAndLast;
  };

  this.setFirstName = function(first) {
    theFull = theFull.split(" ")
    theFull[0] = first;
    theFull = theFull.join(" ");
  };

  this.setLastName = function(last) {
    theFull = theFull.split(" ")
    theFull[1] = last;
    theFull = theFull.join(" ");
  };
};

const bob = new Person('Bob Ross');
bob.firstName;
bob.lastName;
console.log(bob.getFirstName());
console.log(bob.getLastName());
console.log(bob.getFullName());
bob.setFirstName('Haskell');
console.log(bob.getFullName());
bob.setLastName('Curry');
console.log(bob.getFullName());
bob.setFullName('Haskell Curry');
console.log(bob.getFullName());
bob.setFullName('Haskell Curry');
console.log(bob.getFirstName());
bob.setFullName('Haskell Curry');
console.log(bob.getLastName());


console.log('--------------------------------------------------------------------------------');
// solved: 2021-11-04 Thu 09:15 PM  
// Map the Debris

function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;

  let accu = [];

  let theCalc = (earthRadius, avgAlt, GM) => Math.round(2*Math.PI*(Math.sqrt(Math.pow(earthRadius + avgAlt, 3)/GM)));

  accu = arr.map(a => {
    let ans = theCalc(earthRadius, a.avgAlt, GM);  

    return {name: a.name, orbitalPeriod: ans};
  });

  return accu;
}

console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));
console.log(orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]));


console.log('--------------------------------------------------------------------------------');



