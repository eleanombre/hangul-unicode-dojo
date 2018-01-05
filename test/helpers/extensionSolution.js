//
//
//
//
//
//
//
// THIS IS CODE THAT WILL ACTUALLY SOLVE THE PROBLEM!!! SO DON'T LOOK AT IT!!!!
//
//
//
//
//
//
//
const jamoLookUp = require('../../src/jamoValues');

const combinate = function(arr) {
	const arr3 = arr.splice(6, 3);
	const arr2 = arr.splice(3);
	const arr1 = arr;
	return `${unicodeFromJamo(arr1)}${unicodeFromJamo(arr2)}${unicodeFromJamo(arr3)}`;
}

const unicodeFromJamo = function(arr) {
  const arr3 = arr.splice(6, 3);
  const arr2 = arr.splice(3);
  const arr1 = arr;
  return `${String.fromCharCode(makeNumber(arr1))}${String.fromCharCode(makeNumber(arr2))}${String.fromCharCode(makeNumber(arr3))}`;
}

function makeNumber(arr) {
  arr = arr.map( function (a) {
  return a.replace(/(&|#|;)/g, "");
  });
  return splitJamo(arr);
}

function splitJamo(arr) {
  let first = arr[0];
  let second = arr[1];
  let third = arr[2];
  initial = jamoLookUp.initial[first];
  medial = jamoLookUp.medial[second];
  final = jamoLookUp.final[third] || 0;
  return makeComposite(initial,medial,final);
}

function makeComposite(initial,medial,final) {
  return (( initial * 588 ) + ( medial * 28 ) + final ) + 44032;
}

module.exports = combinate;
