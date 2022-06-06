const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const inputArray = [];
for(let i = 0; i < input.length; i++) {
    const inputValue = input[i].split(" ").map(Number);
    inputArray.push(inputValue);
}

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

function solution(arr) {
    let answer = 0;
    const [[n, m], ...position] = arr;
    const board = [];
    const queue = new Queue();
    // 4방 탐색 초기화
    const dy = [1, 0, -1, 0];
    const dx = [0, 1, 0, -1];
    // board에 정보 입력
    for(let info of position) board.push(info);
    // 토마토가 전부 익는 날을 초기화
    const day = Array.from({ length: m }, () => Array.from({ length: n }, () => 0));
    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board[i].length; j++) {
            // 최초 실행 때 있는 토마토 queue에 push
            if(board[i][j] === 1) queue.push([i, j]);
            // 초기값을 -1로 셋팅
            if(board[i][j] === 0) day[i][j] = -1;
        }
    }
    // 넓이 우선 탐색 시작
    while(queue.size()) {
        // 분해 구조 할당으로 queue의 요소를 변수 y, x 초기화하고 빼주기
        const [y, x] = queue.front(); queue.pop();
        for(let i = 0; i < 4; i++) {
            const ny = y + dy[i];
            const nx = x + dx[i];
            // 4방 탐색 예외처리
            if(ny < 0 || ny >= m || nx < 0 || nx >= n) continue;
            if(day[ny][nx] >= 0) continue;
            // deth 처리
            day[ny][nx] = day[y][x] + 1;
            // queue에 push
            queue.push([ny, nx]);
        }
    }
    // 보드에 있는 요소별 탐색시작
    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(day[i][j] === -1) return -1;
            // 제일 큰수 출력
            answer = Math.max(answer, day[i][j]);
        }
    }
    return answer;
}

console.log(solution(inputArray));