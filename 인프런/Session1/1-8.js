/* 
[일곱 난쟁이]
- 문제: 총 9명의 난쟁이 중 키의 합이 100이 되는 7명의 난쟁이들의 키를 출력 (입력된 순서대로 출력)
- 입력: 20, 7, 23, 19, 10, 15, 25, 8, 13
- 출력: 20, 7, 23, 19, 10,8, 13
*/

// 틀림
// function solution(arr) {
//   const prevArr = [...arr];
//   let currentArr = [...arr];
//   const sum = currentArr.slice(0, 7).reduce((a, b) => a + b);
//   if (sum !== 100) {
//     currentArr.splice(9, 0, currentArr[0]).shift();
//   } else {
//     const resultArr = currentArr.slice(0, 7);
//     return prevArr.filter((i, idx) => {
//       resultArr.forEach((_i, _idx) => {
//         return i === _i;
//       });
//     });
//   }
// }

// 이중 for문 사용
// 강의 answer
function solution1(arr) {
  let answer = arr;
  let sum = answer.reduce((a, b) => a + b, 0);
  let flag = 0;
  for (let i = 0; i < 8; i++) {
    for (let j = i + 1; j < 9; j++) {
      if (sum - (answer[i] + answer[j]) == 100) {
        answer.splice(j, 1);
        answer.splice(i, 1);
        flag = 1;
        break;
      }
    }
    if (flag == 1) break;
  }
  return answer;
}
const arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));
// console.log(solution1(arr));
