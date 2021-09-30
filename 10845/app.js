const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const inputArray = [];
for(let i = 1; i <= +input[0]; i++) {
    const inputValue = input[i].trim();
    inputArray.push(inputValue);
}

function Queue() {
    this.store = {};
    this.head = 0;
    this.tail = 0;
}

Queue.prototype.size = function () {
    if(this.store[this.tail] === undefined) {
        return 0; 
    }
    else return this.tail - this.head + 1;
}

Queue.prototype.push = function (value) {
    if(this.size() === 0) this.store[this.head] = value;
    else {
        this.tail += 1;
        this.store[this.tail] = value;
    }
}

Queue.prototype.pop = function () {
    let popItem;
    if(this.size() === 0) return -1;
    else if(this.head === this.tail) {
        popItem = this.store[this.head];
        delete this.store[this.head];
        this.head = 0;
        this.tail = 0;
    } else {
        popItem = this.store[this.head];
        delete this.store[this.head];
        this.head += 1;
    }
    return popItem;
}

Queue.prototype.empty = function () {
    if(this.size() === 0) return 1;
    else return 0;
}

Queue.prototype.front = function () {
    if(this.size() === 0) return -1;
    else return this.store[this.head];
}

Queue.prototype.back = function () {
    if(this.size() === 0) return -1;
    else return this.store[this.tail];
}

console.log(solution(inputArray));

function solution(arr) {
    const queue = new Queue();
    let answer = '';
    const result = [];
    for(let x of arr) {
        if(x.includes('push')) {
            const value = x.split(' ');
            queue.push(+value[1]);
        } else if(x === 'pop') {
            const value = queue.pop();
            result.push(value);
        } else if(x === 'size') result.push(queue.size());
        else if(x === 'empty') result.push(queue.empty());
        else if(x === 'front') result.push(queue.front());
        else if(x === 'back') result.push(queue.back());
    }
    for(let x of result) {
        answer += x + '\n';
    }
    return answer.trimEnd();
}