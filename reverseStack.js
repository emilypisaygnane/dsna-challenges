class Stack {
  constructor() {
    this.stack = [];
  }

  // methods
  push(element) {
    this.stack.push(element);
  }

  pop() {
    return this.stack.pop();
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  size() {
    return this.stack.length;
  }

   clear() {
    this.stack = [];
  }

  print() {
    console.log(this.stack.toString());
  }
}

class Queue {
  constructor() {
    this.queue = [];
  }
  enqueue(element) {
    this.queue.push(element);
  }
  dequeue() {
    return this.queue.shift();
  }
  hasNext() {
    return this.queue.length > 0;
  }
  isEmpty() {
    return this.queue.length == 0;
  }
}

function reverse(stack){ 
  const queue = new Queue();
  while(!stack.isEmpty()){
     queue.enqueue(stack.pop());
  } 
  
  while(!queue.isEmpty()){
     stack.push(queue.dequeue());
  }
}
//Creates a new stack.
const stack = new Stack(); 

stack.push('My name is Dug');
stack.push('There');
stack.push('Hi'); 
//Prints the stack before the reversal.
console.log('Printing stack before reversal: ', stack.print());
//Reverses the stack.
reverse(stack);
//Prints the stack after the reversal.
console.log('Printing stack after reversal: ', stack.print);
