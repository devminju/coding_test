/* 
문제: 연필 1 다스는 12자루입니다. 학생 1인당 연필을 1자루씩 나누어 준다고 할 때 N명이 학생수 를 입력하면 필요한 연필의 다스 수를 계산하는 프로그램을 작성하세요.
입력: 첫 번째 줄에 1000 이하의 자연수 N이 입력된다.
출력: 첫 번째 줄에 필요한 다스 수를 출력합니다. */

function solution1(n) {
  if (n % 12 > 0) {
    return parseInt(n / 12) + 1;
  } else {
    return parseInt(n / 12) + 1;
  }
}

function solution(n) {
  let answer;
  answer = Math.ceil(n / 12);
  return answer;
}

console.log(solution(178));
