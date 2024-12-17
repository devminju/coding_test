// 문제
// 운영체제의 역할 중 하나는 컴퓨터 시스템의 자원을 효율적으로 관리하는 것입니다. 이 문제에서는 운영체제가 다음 규칙에 따라 프로세스를 관리할 경우 특정 프로세스가 몇 번째로 실행되는지 알아내면 됩니다
/*
1. 실행 대기 큐(Queue)에서 대기중인 프로세스 하나를 꺼냅니다.
2. 큐에 대기중인 프로세스 중 우선순위가 더 높은 프로세스가 있다면 방금 꺼낸 프로세스를 다시 큐에 넣습니다.
3. 만약 그런 프로세스가 없다면 방금 꺼낸 프로세스를 실행합니다.
  3.1 한 번 실행한 프로세스는 다시 큐에 넣지 않고 그대로 종료됩니다.
*/

// 풀이 ============================================
// queue는 array 를 사용하여 생성
// 1. prio 정보와 초기 index 정보가 들어있는 queue 생성
// 2. 실행 순서대로 정렬된 excution_queue 생성
// 3. excution_queue의 length가 원본 priorites의 length와 같아질 떄까지 반복
// 3-1. front_item 와 다른 요소들 비교
// 3-2. front_item이 prior 값이 가장 크면 excution_queue에 추가
// 3-3. front_item 보다 큰 prior 값이 있으면 front_item은 기존 queue에 추가
// 4. excution_queue 를 반복하며 기존 index와 location이 동일한 요소의 index+1 반환

function solution(priorities, location) {
  const queue = priorities.map((i, idx) => {
    return { prior: i, idx };
  });

  const excution_queue = [];
  let front = 0;
  let rear = priorities.length;
  const enqueu = (value) => {
    queue[rear++] = value;
  };
  const dequeu = () => {
    delete queue[front];
    front++;
  };

  while (excution_queue.length < priorities.length) {
    const firstItem = queue[front];
    let highItem = firstItem;
    for (value of queue) {
      if (value?.prior > highItem.prior) {
        highItem = value;
      }
    }
    if (firstItem.prior === highItem.prior) {
      excution_queue.push(firstItem);
      dequeu();
    } else {
      enqueu(firstItem);
      dequeu();
    }
  }
  return excution_queue.findIndex((i) => i.idx === location) + 1;
}
console.log(solution([1, 1, 9, 1, 1, 1], 0));

// 답안 ====================================
// 연결 리스트를 사용해 queue 구현함
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  enqueue(newValue) {
    const newNode = new Node(newValue);
    if (this.head === null) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  dequeu() {
    const value = this.head.value;
    this.head = this.head.next;
    return value;
  }

  peek() {
    // head 반환
    return this.head.value;
  }
}
function answer(priorities, location) {
  // 큐 생성
  const queue = new Queue();
  for (let i = 0; i < priorities.length; i += 1) {
    queue.enqueue([priorities[i], i]);
  }

  // 우선순위 낮은 순으로 정렬
  priorities.sort((a, b) => b - a);
  console.log(priorities, "============");
  console.log(queue, "============");

  let count = 0;
  while (true) {
    // 무한 루프 돌려도 종료됨
    const currentValue = queue.peek();
    if (currentValue[0] < priorities[count]) {
      queue.enqueue(queue.dequeu());
    } else {
      const value = queue.dequeu();
      count += 1;
      if (location === value[1]) {
        return count;
      }
    }
  }
  return count; // 이 라인 실행될 일 없음
}
console.log(answer([1, 1, 9, 1, 1, 1], 0));

// 후기 =====================================
// queue 가 무엇인지 정확히 알고 쓰자. front, rear, enqueue, dequeue가 어떻게 구성되었는지 알아야한다.
// 가설을 세운후, 그 가설이 잘못되었을 경우 왜 잘못되었는지 적어 놓자. 그 가설을 다시 사용하지 않도록 기억하기 위함이다.
// 문제를 잘 읽자. "가장 앞에 있는 것을 꺼낸다", "가장 마지막에 넣는다" 를 보면 queue를 떠올려야 한다.
