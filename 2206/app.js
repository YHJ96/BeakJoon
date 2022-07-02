const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const inputArray = [];
for(let i = 1; i < input.length; i++) inputArray.push(input[i].split('').map(Number));

class Queue {
    constructor() {
        // 데이터를 저장할 저장소 초기화
        this.storage = {};
        // 맨 앞의 포인터 초기화
        this.head = 0;
        // 맨 뒤의 포인터 초기화
        this.tail = 0;
    }
    // Queue에 담겨있는 요소들의 개수를 출력하는 함수
    size() {
        // Queue에 담겨있는 요소가 없다면 0을 반환
        if(this.storage[this.tail] === undefined) return 0;
        // Queue에 담겨있는 요소가 있다면 요소의 개수를 반환
        else return this.tail - this.head + 1;
    }
    // Queue의 맨 뒤에 value를 넣는 함수
    push(value) {
        // 예외처리 처음 비어져있는 Queue일 경우
        if(this.size() === 0) {
            this.storage[this.head] = value;
        } else {
            // tail를 1 더하고 tail를 인덱스 번호로 하는 스토리지에 해당 값을 저장
            this.tail += 1;
            this.storage[this.tail] = value;
        }
    }
    // Queue의 맨 앞에 value를 빼주는 함수
    pop() {
        // 예외처리 Queue가 비어져 있는 경우
        if(this.size() === 0) {
            return undefined;
            // head와 tail이 같은 경우
        } else if(this.head === this.tail) {
            // delete 연산자로 해당 값 삭제
            delete this.storage[this.head];
            // 변수 초기화
            this.head = 0;
            this.tail = 0;
        } else {
            delete this.storage[this.head];
            this.head += 1;
        }
    }
    // Queue에 요소가 있는지 없는지 확인하는 함수
    empty() {
        // 요소가 있을 경우 ture를 출력
        if(this.size() !== 0) return true;
        // 요소가 없을 경우 false를 출력
        else return false;
    }
    // Queue의 맨 앞의 요소를 출력하는 함수
    front() {
        // Queue에 요소가 없다면 undefined 반환
        if(this.size() === 0) return undefined;
        // 요소가 있다면 제일 앞의 요소를 반환
        else return this.storage[this.head];
    }
    // Queue의 맨 뒤의 요소를 출력하는 함수
    back() {
        // Queue에 요소가 없다면 undefined 반환
        if(this.size() === 0) return undefined;
        // 요소가 있다면 제일 뒤의 요소를 반환
        else return this.storage[this.tail];
    }
}

function bfs(board) {
    const n = board.length;
    const m = board[0].length;
    const depth = Array.from({ length: n }, () => Array.from({ length: m }, () => -1));
    const dy = [1, 0, -1, 0];
    const dx = [0, 1, 0, -1];
    const queue = new Queue();
    depth[0][0] = 1;
    queue.push([0, 0]);
    while(queue.size()) {
        const [y, x] = queue.front(); queue.pop();
        for(let i = 0; i < 4; i++) {
            const ny = y + dy[i];
            const nx = x + dx[i];
            if (ny < 0 || nx < 0 || ny >= n || nx >= m || board[ny][nx] === 1) continue;
            board[y][x] = 1;
            depth[ny][nx] = depth[y][x] + 1;
            queue.push([ny, nx]);
        }
    }
    return depth[n - 1][m - 1];
}

function solution(board) {
    let answer = Number.MAX_SAFE_INTEGER;
    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board[0].length; j++) {
            if (board[i][j] === 1) {
                board[i][j] = 0;
                const count = bfs(board);
                if (count === -1) break;
                answer = Math.min(answer, count);
                board[i][j] = 1;
            }
        }
    }
    if (answer === Number.MAX_SAFE_INTEGER) return -1;
    return answer;
}

console.log(solution(inputArray));