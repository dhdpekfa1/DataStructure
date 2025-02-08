type Stack = number[];

// Creating a stack
const tsCreateStack = () => {
  let stack: Stack = [];
  return stack;
};

// Creating an empty stack -> Top이 -1인지 확인
const tsCheckEmpty = (stack: Stack) => {
  return stack.length === 0;
};

const tsCheckFull = (stack: Stack) => {
  // 최대 5개로 설정
  return stack.length <= 5;
};

// Adding items into the stack
const tsPush = (stack: Stack, item: number) => {
  if (checkFull(stack)) {
    return 'stack is full';
  }

  stack.push(item);
};

// Adding items into the stack
const tsPop = (stack: Stack) => {
  if (checkEmpty(stack)) {
    return 'stack is empty';
  }

  return stack.pop();
};

// 호출
const tsStack = createStack();
console.log(tsStack); // []
push(tsStack, 1); // [1]
push(tsStack, 2); // [1, 2]
push(tsStack, 3); // [1, 2, 3]
pop(tsStack); // [1, 2]

//
