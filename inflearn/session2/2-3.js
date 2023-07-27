/* 
[가위 바위 보]
- 문제: A,B 두사람이 가위바위보를 한다. 총 N번의 게임을 하여 A가 이기면 A 출력, B가 이기면 B 출력, 비기면 D 출력해라.
- 입력: [2, 3, 3, 1, 3], [1, 1, 2, 2, 3]
- 출력: [A,B,A,B,D]
*/

function solution(a, b) {
  let answer = [];

  for (let i = 0; i < a.length; i++) {
    if (a[i] === b[i]) answer.push("D");
    else if (a[i] === 1) {
      b[i] === 2 ? answer.push("B") : answer.push("A");
    } else if (a[i] === 2) {
      b[i] === 1 ? answer.push("A") : answer.push("B");
    } else if (a[i] === 3) {
      b[i] === 1 ? answer.push("B") : answer.push("A");
    }
  }

  return answer;
}

// 강의 answer
function solution1(a, b) {
  let answer = "";
  for (let i = 0; i < a.length; i++) {
    if (a[i] === b[i]) answer += "D ";
    else if (a[i] === 1 && b[i] === 3) answer += "A ";
    else if (a[i] === 2 && b[i] === 1) answer += "A ";
    else if (a[i] === 3 && b[i] === 2) answer += "A ";
    else answer += "B ";
  }

  return answer;
}

let a = [2, 3, 3, 1, 3];
let b = [1, 1, 2, 2, 3];
console.log(solution(a, b));
