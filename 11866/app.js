const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = input[0].split(' ');

function Queue() {
    this.store = {};
    this.head = 0;
    this.tail = 0;
}

Queue.prototype.size = function () {
    if(this.store[this.tail] === undefined) return 0;
    else return this.tail - this.head + 1;
}

Queue.prototype.inqueue = function (value) {
    if(this.size() === 0) this.store[this.head] = value;
    else {
        this.tail += 1;
        this.store[this.tail] = value;
    }
}

Queue.prototype.dequeue = function () {
    let flag;
    if(this.size() === 0) return -1;
    else if(this.head === this.tail) {
        flag = this.store[this.head];
        delete this.store[this.head];
        this.head = 0;
        this.tail = 0;
    } else  {
        flag = this.store[this.head];
        delete this.store[this.head];
        this.head += 1;
    }
    return flag;
}

console.log(solution(+input[0], +input[1]));

function solution(n, count) {
    const queue = new Queue();
    const result = [];
    for(let i = 1; i <= n; i++) {
        queue.inqueue(i);
    }
    while(queue.size() > 0) {
        for(let i = 0; i < count - 1; i++) {
            const item = queue.dequeue();
            queue.inqueue(item);
        }
        result.push(queue.dequeue());
    }
    let answer = '';
    for(let x of result) {
        if(x === result[result.length - 1]) answer += `${x}`;
        else answer += `${x}, `;
    }
    return `<${answer}>`;
}