/* 
[삼각형 판별하기]
- 문제: 길이가 서로 다른 A, B, C 세 개의 막대 길이가 주어짐. 세 막대로 삼각형을 만들 수 있 으면 “YES"를 출력, 만들 수 없으면 ”NO"를 출력
- 입력: 1) 6 7 11, 2) 13 33 17
- 출력: 1) YES, 2) NO
- 필요한 사전지식
  - 삼각형 결정 조건: 가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 한다.
*/

// 풀이 1
// 강의 답변 엄청 짦은데
function solution(a, b, c) {
  let long;
  let short1;
  let short2;
  if (a < b) {
    long = b;
    short1 = a;
  } else {
    long = a;
    short1 = b;
  }

  if (c > long) {
    short2 = long;
    long = c;
  } else {
    short2 = c;
  }

  if (long < short1 + short2) {
    return "YES";
  } else {
    return "NO";
  }
}

// 강의 answer
function answer(a, b, c) {
  let answer = "YES",
    max;
  let tot = a + b + c;
  if (a > b) max = a;
  else max = b;
  if (c > max) max = c;
  if (tot - max <= max) answer = "NO";
  return answer;
}

console.log(solution(6, 7, 11));
