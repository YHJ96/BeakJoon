const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
const inputArray = [];
for(let i = 0; i < input.length; i++) {
    const inputValue = input[i].split(' ').map(Number);
    inputArray.push(inputValue);
}

function Queue() {
    this.store = {};
    this.head = 0;
    this.tail = 0;
}

Queue.prototype.size = function () {
    // 객체에 키가 tail의 이름으로 생성된게 없으면 0 반환 
    if(this.store[this.tail] === undefined) {
        return 0; 
    }
    // array.length처럼 + 1로 길이를 확인
    else return this.tail - this.head + 1;
}

Queue.prototype.push = function (value) {
    // size가 0이면 head의 이름으로 키를 생성하고 값은 넣음
    if(this.size() === 0) this.store[this.head] = value;
    // size가 1이 아니면 tail에 +1 증가시킨뒤 값을 넣음 
    else {
        this.tail += 1;
        this.store[this.tail] = value;
    }
}

Queue.prototype.pop = function () {
    // array의 메소드인 pop처럼 pop의 값을 반환하기 위해서 popItem 변수선언
    let popItem;
    if(this.size() === 0) return -1;
    // head와 tail 같다면 아이템이 마지막 값 그래서 head와 tail을 디폴트값으로 초기화
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

Queue.prototype.front = function () {
    if(this.size() === 0) return -1;
    else return this.store[this.head];
}

function solution(arr) {
    let answer = [];
    const [[n, m, k, target], ...edge] = arr;
    const graph = Array.from({ length: n + 1 }, () => []);
    const visited = Array.from({ length: n + 1 }, () => false);
    const distance = Array.from({ length: n + 1 }, () => 0);
    const queue = new Queue();
    // edge의 요소 만큼 순회
    for(let i = 0; i < edge.length; i++) {
        // 간선의 정보를 graph에 입력 단방향 그래프
        const [ node1, node2 ] = edge[i];
        graph[node1].push(node2);
    }
    // queue 초기화
    queue.push(target);
    // 방문처리 초기화
    visited[target] = true;
    // 넓이 우선 탐색 시작
    while(queue.size()) {
        // idx에 queue의 앞의 요소를 초기화
        const idx = queue.front();
        queue.pop();
        // 노드별 간선정보의 요소만큼 순회
        for(let node of graph[idx]) {
            // 방문을 하지 않은 경우
            if(!visited[node]) {
                // 방문처리
                visited[node] = true;
                // queue에 node push
                queue.push(node);
                // 해당 노드의 간선의 개수를 입력
                distance[node] = distance[idx] + 1;
            }
        }
    }
    // distance의 요소 만큼 순회
    distance.forEach((item, index) => {
        // 해당 거리에 맞는 노드가 있으면 노드 입력
        if(item === k) answer.push(index);
    });
    // 예외 처리
    if(answer.length === 0) return -1;
    // 정답 정제
    return answer.join('\n');
}

console.log(solution(inputArray));