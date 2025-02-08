class TsQueue {
  SiZE: number;
  items: number[];
  rear: number;
  front: number;
  constructor(size = 5) {
    this.SiZE = size;
    this.items = new Array(this.SiZE) as number[];
    this.front = -1;
    this.rear = -1;
  }

  // 큐가 가득 찼는지 확인
  isFull() {
    return this.rear === this.SiZE - 1;
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
    console.log(`Inserted ${element}`);
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

    console.log(`Deleted -> ${element}`);
    return element;
  }

  // 큐 요소 출력
  display() {
    if (this.isEmpty()) {
      console.log('Empty Queue');
      return;
    }

    console.log(`\nFront index -> ${this.front}`);
    console.log(
      'Items ->',
      this.items.slice(this.front, this.rear + 1).join(' ')
    );
    console.log(`Rear index -> ${this.rear}`);
  }
}

// 테스트
const qu = new TsQueue(5);
qu.enQueue(10);
qu.enQueue(30);
qu.enQueue(20);
qu.enQueue(40);
qu.enQueue(50);
qu.enQueue(60); // Queue is full
qu.display();

qu.deQueue();
qu.deQueue();
qu.display();
