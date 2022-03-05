// 2021-09-20 Mon 07:29 PM

console.log('----------------------------------------------------------------------------------------------------');
// Sum All Numbers in a Range

function sumAll(arr) {

  let accu = [];
  let first = arr[0];
  let second = arr[1];
  
  if (arr[0] < arr[1]) {
    for (let i = 0; i < (arr[1] - arr[0])+1; ++i) {
      accu.push(first++);
    }
  }

  if (arr[0] > arr[1]) {
    for (let i = arr[0]; i >= arr[1]; --i) {
      accu.push(first--);
    }
  }

  return accu.reduce((a, b) => a+b);
}

console.log(sumAll([1, 4]));
console.log(sumAll([4, 1]));
console.log(sumAll([5, 10]));
console.log(sumAll([10, 5]));
console.log(sumAll([10, 1]));

console.log('----------------------------------------------------------------------------------------------------');
// solved: 2021-09-20 Mon 07:38 PM
// Diff Two Arrays

function diffArray(arr1, arr2) {
  var newArr = [];

  arr1.filter(a => {
    if (arr2.indexOf(a) < 0) {
      return newArr.push(a);
    }

    return NaN;
  });

  arr2.filter(a => {
    if (arr1.indexOf(a) < 0) {
      return newArr.push(a);
    }

    return NaN;
  });

  return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] ));
console.log(diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]));
console.log(diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]));
console.log(diffArray([], ["snuffleupagus", "cookie monster", "elmo"]));
console.log(diffArray([1, "calf", 3, "piglet"], [7, "filly"]));

console.log('----------------------------------------------------------------------------------------------------');
// solved: 2021-09-20 Mon 07:38 PM
// Seek and Destroy 



























