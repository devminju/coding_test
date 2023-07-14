/* 
[문자 찾기]
- 문제: 한개의 문자열 입력 받고, 특정 문자를 입력 받은 후 특정 문자가 문자열에 몇 개 존재하는지 출력
- 입력: COMPUTERPROGRAMMING R
- 출력: 3
*/

function solution(str1, str2) {
  let answer;
  const regexp = new RegExp(`[${str2}]`, "g");
  answer = str1.match(regexp);
  return answer.length;
}

// 강의 answer
function solution1(s, t) {
  let answer = 0;
  for (let x of s) {
    if (x === t) answer++;
  }
  return answer;
}

console.log(solution("COMPUTERPROGRAMMING", 'R"'));
// console.log(solution1("COMPUTERPROGRAMMING", 'R"'));
