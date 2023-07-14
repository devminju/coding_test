/* 
[A를 #으로]
- 문제: 대뮨자 A를 모두 #으로 변경하여 출력
- 입력: BANANA
- 출력: B#N#N#
*/

function solution(text) {
  let answer;
  answer = text.replace(/A/g, "#");
  return answer;
}

// 강의 answer
function solution1(s) {
  let answer = "";
  for (let x of s) {
    if (x == "A") answer += "#";
    else answer += x;
  }
  return answer;
}

console.log(solution("BANANA"));
// console.log(solution1("BANANA"));
