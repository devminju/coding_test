/* 
[가운데 문자 출력]
- 문제: 소문자로 된 단어가 입력되면 그 다운데 문자 출력. 단어 길이가 짝수인 경우 가운데 2개 문자 출력
- 입력: "study"  , "good"
- 출력: "u", "oo"
*/

function solution(str) {
  let num = Math.floor(str.length / 2);
  let new_str;
  if (str.length % 2 === 1) {
    // 홀수
    new_str = str.slice(num, num + 1);
  } else {
    // 짝수
    new_str = str.slice(num - 1, num + 1);
  }

  return new_str;
}

// 강의 answer
function solution1(s) {
  let answer;
  let mid = Math.floor(s.length / 2);
  if (s.length % 2 === 1) answer = s.substring(mid, mid + 1);
  else answer = s.substring(mid - 1, mid + 1);
  //if(s.length%2===1) answer=s.substr(mid, 1);
  //else answer=s.substr(mid-1, 2);
  return answer;
}
let str = "good";
console.log(solution(str));
