/* 
[보이는 학생]
- 문제: n명의 학생을 일렬로 줄 세웠을때 선생님이 볼 수 있는 학생의 수 구하기
- 입력: [130, 135, 148, 140, 145, 150, 150, 153];
- 출력: 5
*/

function solution(arr) {
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (answer.length === 0) answer.push(arr[i]);
    if (answer[answer.length - 1] < arr[i]) answer.push(arr[i]);
  }

  return answer.length;
}

// 강의 answer
function solution1(arr) {
  let answer = 1,
    max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      answer++;
      max = arr[i];
    }
  }
  return answer;
}

let arr = [130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr));
