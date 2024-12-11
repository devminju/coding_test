/* 
[대문자 찾기]
- 문제: 한개의 문자열에 몇개의 대문자가 있는지 출력
- 입력: KoreaTimeGood
- 출력: 3
*/

function solution(str) {
  let answer = 0;
  for (i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      answer = answer + 1;
    }
  }
  return answer;
}

// 강의 answer
function solution1(s) {
  let answer = 0;
  for (let x of s) {
    //let num=x.charCodeAt();
    //if(num>=65 && num<=90) answer++;
    if (x === x.toUpperCase()) answer++;
  }

  return answer;
}

console.log(solution("KoreaTimeGood"));
