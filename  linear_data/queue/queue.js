class Queue {
  constructor(size = 5) {
    this.SIZE = size;
    this.items = new Array(this.SIZE);
    this.front = -1;
    this.rear = -1;
  }

  // 큐가 가득 찼는지 확인
  isFull() {
    return this.rear === this.SIZE - 1;
  }

  // 큐가 비었는지 확인
  isEmpty() {
    return this.front === -1;
  }

  // 요소 추가 (Enqueue)
  enQueue(element) {
    if (this.isFull()) {
      console.log('Queue is full');
      return;
    }

    if (this.front === -1) this.front = 0; // 첫 번째 요소 추가 시 front 초기화
    this.rear++;
    this.items[this.rear] = element;
    console.log(`${element} 추가`);
  }

  // 요소 제거 (Dequeue)
  deQueue() {
    if (this.isEmpty()) {
      console.log('Queue is empty');
      return -1;
    }

    let element = this.items[this.front];

    // 큐에 한 개의 요소만 있을 경우 초기화
    if (this.front >= this.rear) {
      this.front = -1;
      this.rear = -1;
    } else {
      this.front++;
    }

    console.log(`${element} 제거`);
    return element;
  }

  // 큐 요소 출력
  display() {
    if (this.isEmpty()) {
      console.log('Empty Queue');
      return;
    }

    console.log(`처음(Front) index -> ${this.front}`);
    console.log(
      'Items ->',
      this.items.slice(this.front, this.rear + 1).join(' ')
    );
    console.log(`마지막(Rear) index -> ${this.rear}`);
  }
}

// 호출
const q = new Queue(5); // Qu
q.enQueue(10); // 10 추가
q.enQueue(20); // 20 추가
q.enQueue(30); // 30 추가
q.enQueue(40); // 40 추가
q.enQueue(50); // 50 추가
q.enQueue(60); // Queue is full
q.display();
/** 처음(Front) index -> 0
 *   Items ->' '10 20 30 40 50
 *   마지막(Rear) index -> 4 */

q.deQueue(); // 10 제거
q.deQueue(); // 20 제거
q.display();
/** 처음(Front) index -> 2
 *   Items -> 30 40 50
 *   마지막(Rear) index -> 4 */
