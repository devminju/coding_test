/* 
[중복단어 제거]
- 문제: 중복된 단어 제거 후 출력. 원래순서 유지하여 출력
- 입력: ["good", "time", "good", "time", "student"];
- 출력: ["good", "time", "student"];
*/

function solution(str) {
  let answer = [];
  for (let i = 0; i < str.length; i++) {
    if (!answer.includes(str[i])) answer.push(str[i]);
  }
  return answer;
}

// 강의 answer
function solution1(s) {
  let answer;
  //console.log(s.indexOf("time"));
  answer = s.filter(function (v, i) {
    return s.indexOf(v) === i;
  });
  return answer;
}
let str = ["good", "time", "good", "time", "student"];
console.log(solution(str));
