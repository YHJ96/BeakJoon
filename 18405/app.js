const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const inputArray = [];
for(let i = 0; i < input.length; i++) inputArray.push(input[i].split(' ').map(Number));
const info = inputArray.pop();

function Queue(value) {
    this.storage = { ...value };
    this.head = 0;
    this.tail = 0;
}

Queue.prototype.size = function() {
    if(this.storage[this.tail] === undefined) return 0;
    else return this.tail - this.head + 1;
}

Queue.prototype.push = function(value) {
    if(this.size() === 0) {
        this.storage[this.head] = value;
    } else {
        this.tail += 1;
        this.storage[this.tail] = value;
    }
}

Queue.prototype.pop = function() {
    if(this.size() === 0) {
        return undefined;
    } else if(this.head === this.tail) {
        delete this.storage[this.head];
        this.head = 0;
        this.tail = 0;
    } else {
        delete this.storage[this.head];
        this.head += 1;
    }
}

Queue.prototype.empty = function() {
    if(this.size() !== 0) return true;
    else return false;
}

Queue.prototype.front = function() {
    if(this.size() === 0) return undefined;
    else return this.storage[this.head];
}

Queue.prototype.back = function() {
    if(this.size() === 0) return undefined;
    else return this.storage[this.tail];
}

function findVirus(target, board, num) {
    const queue = new Queue();
    for(let position of target) queue.push(position);
    const dy = [1, 0, -1, 0];
    const dx = [0, 1, 0, -1];
    while(queue.size()) {
        const [y, x] = queue.front(); queue.pop();
        for(let i = 0; i < 4; i++) {
            const ny = y + dy[i];
            const nx = x + dx[i];
            if (ny < 0 || nx < 0 || ny >= board.length || nx >= board[0].length || board[ny][nx] !== 0) continue;
            board[ny][nx] = num;
        }
    }
}

function solution(arr , info) {
    const [[n, m], ...board] = arr;
    const [s, targetY, targetX] = info;
    for(let i = 0; i < s; i++) {
        for(let j = 1; j <= m; j++) {
            const queue = [];
            for(let y = 0; y < board.length; y++) {
                for(let x = 0; x < board[0].length; x++) {
                    if (board[y][x] === j) queue.push([y, x]);
                }
            }
            findVirus(queue, board, j);
        }
    }
    return board[targetY - 1][targetX - 1];
}

console.log(solution(inputArray, info));