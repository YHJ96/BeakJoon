const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const inputArray = [];
for(let i = 0; i < input.length; i++) {
    const inputValue = input[i].split(" ").map(Number);
    inputArray.push(inputValue);
}

function solution(arr) {
    let answer = 0;
    const [[n, m], ...position] = arr;
    const graph = Array.from({ length: n }, () => []);
    const visited = Array.from({ length: n }, () => false);
    // 간선의 요소만큼 반복문 실행
    for(let node of position) {
        // 양방향 노드 설정
        const [node1, node2] = node;
        graph[node1].push(node2);
        graph[node2].push(node1);
    }
    // 깊이 우선 탐색 시작
    function DFS(L, count) {
        // 깊이가 4인 경우 함수 정지
        if(count === 4) {
            answer = 1;
            return;
        }
        // 백트래킹 시작
        for(let node of graph[L]) {
            if(!visited[node]) {
                visited[L] = true;
                DFS(node, count + 1);
                visited[L] = false;
            }
            if(answer === 1) return;
        }
    }
    // 노드의 요소만큼 반복문 실행
    for(let i = 0; i < graph.length; i++) {
        DFS(i, 0);
    }
    return answer;
}

console.log(solution(inputArray));