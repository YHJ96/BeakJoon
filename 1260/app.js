const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const inputArray = [];
for(let item of input) {
    const inputVaule = item.split(' ').map(Number);
    inputArray.push(inputVaule);
}

function solution(arr) {
    // 깊이 우선 탐색과 너비 우선 탐색의 결과를 담을 배열 초기화
    let answer = [[], []];
    // 구조 분해 할당으로 Input 정제
    const [ [ n, m, target ], ...nodes] = arr;
    // 그래프 초기화
    const graph = Array.from({ length : n + 1 }, () => []);
    // 방문 처리 배열 초기화
    const visited = Array.from({ length : n + 1}, () => false);
    // nodes의 요소만큼 순회 시작
    for(let node of nodes) {
        // 정점과 간선으로 연결된 노드의 값을 구조분해할당으로 나눔
        const [ node1, node2 ] = node;
        // 간선의 방향이 없는 그래프이므로 양쪽 모두 등록
        graph[node1].push(node2);
        graph[node2].push(node1);   
    }
    // 그래프의 노드 번호 오름차순 정렬
    graph.forEach((node) => node.sort((a,b) => a - b));
    // 깊이 우선 탐색 함수 생성
    function DFS(L) {
        // 방문 처리가 완료 된 곳은 return
        if(visited[L]) return;
        // 방문한 노드를 push
        answer[0].push(L);
        // 방문 처리
        visited[L] = true;
        // 그래프의 요소만큼 순회 시작
        for(let node of graph[L]) {
            // 노드가 방문 처리가 안되있으면 방문처리를 위해 깊이 우선 탐색 시작
            if(!visited[node]) DFS(node);
        }
    };
    // 너비 우선 탐색 함수 생성
    function BFS(L) {
        // 자료구조 큐 초기화
        const queue = [];
        // 처음 방문한 노드 방문 처리
        visited[L] = true;
        // 처음 방문 처리한 노드 queue에 삽입
        queue.push(L);
        // 처음 방문한 노드 push
        answer[1].push(L);
        // 너비 우선 탐색 시작
        while(queue.length) {
            // 첫번 째 노드의 정보를 가져옴
            const fNode = queue.shift();
            // 그래프의 요소 만큼 순회 시작
            for(let node of graph[fNode]) {
                // 노드가 방문 처리가 안되있으면 큐에 넣고 answer에 push 한 뒤 방문 처리
                if(!visited[node]) {
                    queue.push(node);
                    answer[1].push(node);
                    visited[node] = true;
                }
            }
        }
    }
    // 깊이 우선 탐색 실행
    DFS(target);
    // 방문 처리 배열 초기화
    visited.fill(false);
    // 너비 우선 탐색 실행
    BFS(target);
    // 정답 정제
    return answer.map((item) => item.join(" ")).join("\n");
}

console.log(solution(inputArray));