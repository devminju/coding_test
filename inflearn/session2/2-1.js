/* 
[큰 수 출력하기]
- 문제: 100개 이하의 정수를 입력받아 바로 앞 수보다 큰 수만 출력(첫 번째 수는 무조건 출력)
- 입력: [7, 3, 9, 5, 6, 12];
- 출력: [ 7, 9, 6, 12 ];
*/

function solution(arr) {
  let preNum = 0;
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (preNum < arr[i]) {
      answer.push(arr[i]);
    }
    preNum = arr[i];
  }
  return answer;
}

// 강의 answer
function solution1(arr) {
  let answer = [];
  answer.push(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) answer.push(arr[i]);
  }
  return answer;
}

let arr = [7, 3, 9, 5, 6, 12];
console.log(solution1(arr));
