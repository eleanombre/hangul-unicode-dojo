// import your solution here
// const solution = require('./path/to/your/solution');
const chai = require('chai');
const eleanorsSolution = require('../helpers/extensionSolution');

const expect = chai.expect;

const initial = ['ㄱ','ㄲ','ㄴ','ㄷ','ㄸ','ㄹ','ㅁ','ㅂ','ㅃ','ㅅ','ㅆ','ㅇ','ㅈ','ㅉ','ㅊ','ㅋ','ㅌ','ㅍ','ㅎ'];
const medial = ['ㅏ','ㅐ','ㅑ','ㅒ','ㅓ','ㅔ','ㅕ','ㅖ','ㅗ','ㅘ','ㅙ','ㅚ','ㅛ','ㅜ','ㅝ','ㅞ','ㅟ','ㅠ','ㅡ','ㅢ','ㅣ'];

const final = ['​','ㄱ','ㄲ','ㄳ','ㄴ','ㄵ','ㄶ','ㄷ','ㄹ','ㄺ','ㄻ','ㄼ','ㄽ','ㄾ','ㄿ','ㅀ','ㅁ','ㅂ','ㅄ','ㅅ','ㅆ','ㅇ','ㅈ','ㅉ','ㅋ','ㅌ','ㅍ','ㅎ'];

function createRandomTestCase() {
  let testArr = [];
  testArr.push(ranIndex(initial), ranIndex(medial), ranIndex(final), ranIndex(initial), ranIndex(medial), ranIndex(final), ranIndex(initial), ranIndex(medial), ranIndex(final));
  return testArr;
}

function ranIndex(arr) {
    let a = arr[Math.floor( Math.random() * (arr.length - 1) )];
    return a;
}

describe('Final Test Suite', () => {

	for ( let i = 0 ; i < 100; i ++ ) {
		let arr = createRandomTestCase();
		let arrCopy = arr.map((innerArr) => innerArr.slice());
    	let copyForItString = arr.map((innerArr) => innerArr.slice());
        let expected = eleanorsSolution(arrCopy);
		it(`should respond with ${expected} when given ${copyForItString}`, () => {
    		let result = solution(arr);
			expect(result).to.equal(expected);
		});
	  }


});
