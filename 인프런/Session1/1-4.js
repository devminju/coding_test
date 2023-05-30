/* 
[1부터 N까지의 합]
- 문제: N이 입력되면 1부터 N까지의 합 출력
- 입력: 1) 6 , 2) 10
- 출력: 1) 21, 2) 55
*/

function solution(n) {
  let answer = 0;
  for (let i = 1; i < n + 1; i++) {
    answer = answer + i;
  }
  return answer;
}

// 강의 answer
function answer(n) {
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    answer = answer + i;
  }
  return answer;
}

console.log(solution(10));
