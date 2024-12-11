/* 
[대문자로 통일]
- 문제: 대소문자가 같이 있는 문자열을 대문자로 변경
- 입력: ItIsTimeToStudy
- 출력: ITISTIMETOSTUDY
*/

function solution(str) {
  let answer = "";
  for (let x of str) {
    if (x === x.toUpperCase()) answer += x;
    answer += x.toUpperCase();
  }
  return answer;
}

// 강의 answer
function solution1(s) {
  let answer = "";
  for (let x of s) {
    let num = x.charCodeAt();
    if (num >= 97 && num <= 122) answer += String.fromCharCode(num - 32);
    else answer += x;

    //if(x===x.toLowerCase()) answer+=x.toUpperCase();
    //else answer+=x;
  }

  return answer;
}

console.log(solution("ItIsTimeToStudy"));
