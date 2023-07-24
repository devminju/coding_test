/* 
[중복문자 제거]
- 문제: 중복된 문자열 제거 후 출력. 출력 문자열은 원래 문자열 순서 유지
- 입력: "ksekkset"
- 출력: "kset"
*/

function solution(str) {
  let answer = "";
  for (let x of str) {
    if (!answer.includes(x)) {
      answer += x;
    }
  }

  return answer;
}

// 강의 answer
function solution1(s) {
  let answer = "";
  //console.log(s.indexOf("K"));
  for (let i = 0; i < s.length; i++) {
    //console.log(s[i], i, s.indexOf(s[i]));
    if (s.indexOf(s[i]) === i) answer += s[i];
  }
  return answer;
}
let str = "ksekkset";
console.log(solution(str));
