/* 
제목: 삼각형 판별하기
문제: 길이가 서로 다른 A, B, C 세 개의 막대 길이가 주어지면 이 세 막대로 삼각형을 만들 수 있 으면 “YES"를 출력하고, 만들 수 없으면 ”NO"를 출력한다.
입력: 첫 번째 줄에 100이하의 서로 다른 A, B, C 막대의 길이가 주어진다.
출력: 첫 번째 줄에 “YES", "NO"를 출력한다.
*/

// 삼각형 결정 조건: 가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 한다.
function solution1(a, b, c) {
  let long;
  let short1;
  let short2;

  if (a > b) {
    long = a;
    short1 = b;
  } else {
    long = b;
    short1 = a;
  }

  if (long > c) {
    short2 = c;
  } else {
    long = c;
    short2 = long;
  }

  if (long < short1 + short2) {
    return "YES";
  } else {
    return "NO";
  }
}

//=============================================== 강의 answer
function solution2(a, b, c) {
  let answer = "YES",
    max;
  let tot = a + b + c;
  if (a > b) max = a;
  else max = b;
  if (c > max) max = c;
  if (tot - max <= max) answer = "NO";
  return answer;
}

console.log(solution(13, 33, 17));
