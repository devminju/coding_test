/* 
[가장 긴 문자열]
- 문제: 문자열 중 가장 긴 문자열 출력
- 입력: "teacher", "time", "student", "beautiful", "good"
- 출력: "beautiful"
*/

function solution(str) {
  let answer = "";
  let length = 0;
  for (let x of str) {
    if (x.length > length) {
      length = x.length;
      answer = x;
    }
  }
  return answer;
}

// 강의 answer
function solution1(s) {
  let answer = "",
    max = Number.MIN_SAFE_INTEGER;
  for (let x of s) {
    if (x.length > max) {
      max = x.length;
      answer = x;
    }
  }
  return answer;
}
let str = ["teacher", "time", "student", "beautiful", "good"];
console.log(solution(str));
