const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map((item) => item.split(' ').map(Number));

function solution(arr) {
    const [[n,m,start], ...position] = arr;
    const graph = Array.from({ length: n + 1 }, () => []);
    const visited = Array.from({ length: n + 1 }, () => false);
    const depth = Array.from({ length: n + 1 }, () => -1);
    // 요소만큼 순회 시작
    for(let nodes of position) {
        const [node1, node2] = nodes;
        // 양방향 간선 그래프 등록
        graph[node1].push(node2);
        graph[node2].push(node1);
    }
    // 너비 우선 탐색 초기화
    const queue = [ start ];
    depth[start] = 0;
    // queue에 요소가 없을 때 까지 수행 시작
    while(queue.length) {
        const current = queue.shift();
        // 방문처리
        visited[current] = true;
        // 해당 요소의 간선 정보만큼 순회시작
        for(let next of graph[current]) {
            // 방문처리가 되어있거나 한번 bfs를 등록한 곳은 예외처리
            if (visited[next]) continue;
            if (depth[next] !== -1) continue;
            depth[next] = depth[current] + 1;
            // queue에 요소 추가
            queue.push(next);
        }
    }
    // 정답 정제
    return depth.slice(1).join('\n');
}

console.log(solution(input));