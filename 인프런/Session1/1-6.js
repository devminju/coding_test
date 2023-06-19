/* 
[홀수]
- 문제: 7개 자연수 중에서 홀수인 수를 골라 그 합을 및 고른 홀수 중 최소값 출력
- 입력: 1) 12 77 38 41 53 92 85
- 출력: 1) 256, 41
*/

let arr = [12, 77, 38, 41, 53, 92, 85];
function solution(_arr) {
  let oddArr = [];
  let min;
  let sum = 0;
  for (i = 0; i < _arr.length; i++) {
    if (_arr[i] % 2 === 1) oddArr.push(_arr[i]);
  }

  min = Math.min(...oddArr);
  for (i = 0; i < oddArr.length; i++) {
    sum = sum + oddArr[i];
  }

  return { sum, min };
}

// 강의 answer
function answer(arr) {
  let answer = [];
  let sum = 0,
    min = 1000;
  for (let x of arr) {
    if (x % 2 === 1) {
      sum += x;
      if (x < min) min = x;
    }
  }
  answer.push(sum);
  answer.push(min);
  return answer;
}

console.log(solution(arr));
console.log(answer(arr));
