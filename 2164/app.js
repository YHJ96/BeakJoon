const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

// 생성자 함수로 Queue 구현
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
    // 1부터 n까지의 값을 Queue에 저장
    for(let i = 1; i <= n; i++) {
        answer.inqueue(i);
    }
    // 1개의 수가 남을때 까지 반복
    while(answer.size() !== 1) {
        // 제일 위부터 빼고 그 위를 또 뺴서 뒤로 push한다.
        answer.dequeue();
        let card = answer.dequeue();
        answer.inqueue(card);        
    }
    return answer.store[0];
}