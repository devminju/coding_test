/* 
[점수 계산]
- 문제: 문제를 연속적으로 맞추는 경우 1개 맞추면 1점, 2개 맞추면 2점 순으로 점수가 늘어난다. 문제를 틀리는 경우 0점이 되고, 그 후 맞추는 겯ㅇ우 1점부터 시작한다.
- 입력: [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
- 출력: 
*/

function solution(arr) {
  let answer = 0;
  let count = 0;

  for (i = 0; i < arr.length; i++) {
    if (arr[i]) {
      count++;
      answer += count;
    } else {
      count = 0;
    }
  }
  return answer;
}

// 강의 answer
function solution1(arr) {
  let answer = 0,
    cnt = 0;
  for (let x of arr) {
    if (x === 1) {
      cnt++;
      answer += cnt;
    } else cnt = 0;
  }

  return answer;
}

let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution1(arr));
