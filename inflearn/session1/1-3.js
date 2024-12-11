/* 
[연필 개수]
- 문제: 연필 1 다스는 12자루. 학생 1인당 연필을 1자루씩 나누어 준다고 할 때 N명이 학생수를 입력하면 필요한 연필의 다스 수를 계산
- 입력: 1) 25 , 2) 178
- 출력: 1) 3, 2) 15
*/

function solution(n) {
  const q = Math.floor(n / 12);
  const r = n % 12;
  let answer;
  if (r > 0) answer = q + 1;
  else answer = q;

  return answer;
}

// 강의 answer
function answer(n) {
  let answer;
  answer = Math.ceil(n / 12);
  return answer;
}

console.log(solution(25));
