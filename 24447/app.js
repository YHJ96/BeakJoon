const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const inputArray = [];
for(let i = 0; i < input.length; i++) {
    const inputValue = input[i].split(' ').map(Number);
    inputArray.push(inputValue);
}

function solution(arr) {
    let answer = 0;
    const [[n,m,start], ...position] = arr;
    let order = Array.from({ length: n + 1 }, () => 0);
    // 간선의 정보를 담을 그래프 변수 초기화
    const graph = Array.from({ length: n + 1 }, () => []);
    // 깊이 확인 변수 초기화
    const depth = Array.from({ length: n + 1 }, () => -1);
    // 방문 처리 확인 변수 초기화
    const visited = Array.from({ length: n + 1 }, () => false);
    // position의 요소만큼 순회
    for(let node of position) {
        const [ node1, node2 ] = node;
        // 간선 정보를 graph에 입력 (양방향 간선 그래프)
        graph[node1].push(node2);
        graph[node2].push(node1);
    }
    // 노드의 정보를 올림차순으로 정리
    graph.forEach((node) => node.sort((a,b) => a-b));
    const queue = [];
    let ordered = 1;
    // 자료구조 queue 초기화
    order[start] = 1;
    depth[start] = 0;
    queue.push(start);
    // 너비 우선 탐색 실행
    while(queue.length) {
        // 맨 앞의 요소를 current에 초기화
        const current = queue.shift();
        visited[current] = true;
        // 현재 노드의 간선 정보의 요소만큼 순회 시작
        for(let next of graph[current]) {
            // 예외처리
            if(visited[next]) continue;
            if(order[next]) continue;
            depth[next] = depth[current] + 1;
            ordered++;
            // depth 정보 입력
            order[next] = ordered;
            // queue에 요소 push
            queue.push(next);
        }
    }
    // 정답 정제
    for(let i = 1; i <= n; i++) answer += (order[i] * depth[i]);
    return answer;
}

console.log(solution(inputArray));