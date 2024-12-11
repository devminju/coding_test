/* 
[세 수 중 최솟값]
- 문제: 100이하의 자연수 A, B, C를 입력받아 세 수 중 가장 작은 값을 출력(정렬을 사용하면 안됨) 
- 입력: 6, 5, 1
- 출력: 1
*/

// 풀이1
function solution(a, b, c) {
  let answer;
  if (a < b) {
    answer = a;
  } else {
    answer = b;
  }
  if (answer > c) {
    answer = c;
  }
  return answer;
}
// 풀이2 ->  메서드 사용하지 않고 if문만 사용해서 풀어야함
function solution1(a, b, c) {
  const min = Math.min(a, b, c);
  return min;
}

// 강의 answer
function answer(a, b, c) {
  let answer;
  if (a < b) answer = a;
  else answer = b;
  if (c < answer) answer = c;
  return answer;
}

console.log(solution(2, 5, 1));
