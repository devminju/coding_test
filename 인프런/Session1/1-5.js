/* 
[최솟값 구하기]
- 문제: 7개 숫자 중 가장 작은 수 출력
- 입력: 1) 5 3 7 11 2 15 17
- 출력: 1) 2
*/

function solution(a, b, c, d, e, f, g) {
  const arr = [a, b, c, d, e, f, g];
  return Math.min(...arr);
}

// 강의 answer
function answer(n) {
  let answer,
    min = Number.MAX_SAFE_INTEGER;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
  }
  answer = min;
  return answer;
}

console.log(solution(5, 3, 7, 11, 2, 15, 17));
let arr = [5, 7, 1, 3, 2, 9, 11];
console.log(answer(arr));

// memo
// Math.min()에서 인자로 배열을 넘길 수는 없다. 구조분해 할당을 통해 변수를 넘겨야한다.
// Number.MAX_SAFE_INTEGER : JS에서 안전한 최대 정수값
// Number.MIN_SAFE_INTEGER : JS에서 안전한 최소 정수값
