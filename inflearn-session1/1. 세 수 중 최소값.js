/* 
제목: 세 수 중 최솟값
문제: 100이하의 자연수 A, B, C를 입력받아 세 수 중 가장 작은 값을 출력하는 프로그램을 작성하세요.(정렬을 사용하면 안됩니다) 
입력: 첫 번째 줄에 100이하의 세 자연수가 입력된다 
출력: 첫 번째 줄에 가장 작은 수를 출력한다 
*/

//메서드 사용하지 않고 if문만 사용해서 풀어야함
function solution1(a, b, c) {
  const min = Math.min(a, b, c);
  return min;
}

function solution(a, b, c) {
  let answer;
  if (a < b) answer = a;
  else answer = b;
  if (c < answer) answer = c;
  return answer;
}

console.log(solution(2, 5, 1));
