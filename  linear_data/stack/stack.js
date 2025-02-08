// Creating a stack
const createStack = () => {
  let stack = [];
  return stack;
};

// Creating an empty stack -> Top이 -1인지 확인
const checkEmpty = (stack) => {
  return stack.length === 0;
};

const checkFull = (stack) => {
  // 최대 5개로 설정
  return stack.length <= 5;
};

// Adding items into the stack
const push = (stack, item) => {
  if (checkFull(stack)) {
    return 'stack is full';
  }

  stack.push(item);
};

// Adding items into the stack
const pop = (stack) => {
  if (checkEmpty(stack)) {
    return 'stack is empty';
  }

  return stack.pop();
};

// 호출
const jsStack = createStack();
console.log(tmpStack); // []
push(tmpStack, 1); // [1]
push(tmpStack, 2); // [1, 2]
push(tmpStack, 3); // [1, 2, 3]
pop(tmpStack); // [1, 2]
