/* 
[대소문자 변환]
- 문제: 대소문자가 같이 있는 문자열을 대문자는 소문자로, 소문자는 대문자로 변경
- 입력: StuDY
- 출력: sTUdy
*/

function solution(str) {
  let answer = "";
  for (let x of str) {
    if (x === x.toUpperCase()) {
      answer += x.toLowerCase();
    } else {
      answer += x.toUpperCase();
    }
  }
  return answer;
}

// 강의 answer
function solution1(s) {
  let answer = "";
  for (let x of s) {
    if (x === x.toUpperCase()) answer += x.toLowerCase();
    else answer += x.toUpperCase();
  }
  return answer;
}

console.log(solution("StuDY"));
