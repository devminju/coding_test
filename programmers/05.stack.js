// 문제
// '(' 또는 ')' 로만 이루어진 문자열 s가 주어졌을 때, 문자열 s가 올바른 괄호이면 true를 return 하고, 올바르지 않은 괄호이면 false를 return 하는 solution 함수를 완성해 주세요.

// 제한사항
// 문자열 s의 길이 : 100,000 이하의 자연수
// 문자열 s는 '(' 또는 ')' 로만 이루어져 있습니다.

// 입출력 예
// s	    answer
// "()()"	true
// "(())()"	true
// ")()("	false
// "(()("	false

// 풀이 ============================================
// 1. '('가 나오면 stack에 push하고 ')'가 나오면 stack에서 pop한다.
// 2. stack이 비어있으면 true, 아니면 false를 반환한다.
// (추가) 3. pop() 호출시 stack이 비어있으면 false를 반환한다.

function solution(s) {
  let answer = true;
  const stack = [];
  for (const char of s) {
    if (char === "(") {
      stack.push(char);
    } else if (stack.length === 0) {
      // else if 보다 else 를 사용하는 것이 가독성이 더 좋음
      answer = false; // return false 를 하는 것이 더 나음
    } else {
      stack.pop();
    }
  }

  if (s.length < 2) return false; // 필요 없는 코드
  if (!answer) return false; // 위에서 return false 하면 필요 없는 코드

  if (stack.length > 0) return false;
  return true;
  // 위 두 줄을 한줄로 끝낼 수 있음 return stack.length === 0
}

console.log(solution("()()"));
console.log(solution("(())()"));
console.log(solution(")()("));
console.log(solution("(()("));
console.log(solution("("));
console.log(solution(")"));
console.log(solution("))))))"));

// 답안 ====================================

function answer(s) {
  const stack = [];
  for (const c of s) {
    if (c === "(") {
      stack.push(c);
    } else {
      if (stack.length === 0) {
        return false;
      }
      stack.pop();
    }
  }
  return stack.length === 0;
}

// 후기 =====================================
// for 문 보단 for of 구문을 사용하자.
// stack 이 아닌 count를 사용해서 구현할 수 있다.
// 풀이를 작성하기 전 가설을 세우자.
