const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

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
    } else {
        flag = this.store[this.head];
        delete this.store[this.head];
        this.head += 1;
    }
    return flag;
}

console.log(solution(+input[0]));

function solution(n) {
    let answer = new Queue();
    for(let i = 1; i <= n; i++) {
        answer.inqueue(i);
    }
    while(answer.size() !== 1) {
        answer.dequeue();
        let card = answer.dequeue();
        answer.inqueue(card);        
    }
    return answer.store[0];
}