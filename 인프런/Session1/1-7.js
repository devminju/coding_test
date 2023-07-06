/* 
[차량 10부제]
- 문제: 날짜의 일의 자리 숫자, 자동차 번호의 일의 자리 숫자가 일치하면 해당 차는 운행 못함.
       운행 못하는 차량 대수 출력
- 입력: 3, 25 23 11 47 53 17 33
- 출력: 3
- 입력: 0, 25 23 11 47 53 17 33
- 출력: 3
*/

function solution(date, arr) {
  let sum = 0;
  arr.forEach((el) => {
    if (String(el).charAt(1) === String(date)) {
      sum += 1;
    }
  });
  return sum;
}

// 강의 answer
function solution1(date, arr) {
  let answer = 0;
  for (let x of arr) {
    if (x % 10 === date) answer++;
  }
  return answer;
}

const arr = [25, 23, 11, 47, 53, 17, 33];
const arr1 = [25, 23, 11, 47, 53, 17, 33];
console.log(solution(3, arr));
console.log(solution1(3, arr));
// console.log(answer(3, arr));
