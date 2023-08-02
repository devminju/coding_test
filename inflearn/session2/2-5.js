/* 
[등수구하기]
- 문제: 
- 입력: 
- 출력: 
*/

function solution(arr) {
  const newArr = [...arr];
  newArr.sort((a, b) => b - a);
  const newObj = {};
  let count = 1;

  for (let i = 0; i < newArr.length; i++) {
    if (newObj[newArr[i]]) {
      count++;
    } else {
      newObj[newArr[i]] = count;
      count++;
    }
  }

  const rankArr = [];
  for (let i = 0; i < arr.length; i++) {
    rankArr.push(newObj[arr[i]]);
  }

  return rankArr;
}

// 강의 answer
function solution1(arr) {
  let n = arr.length;
  let answer = Array.from({ length: n }, () => 1);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[j] > arr[i]) answer[i]++;
    }
  }
  return answer;
}

let arr = [87, 89, 92, 100, 76];
console.log(solution(arr));
