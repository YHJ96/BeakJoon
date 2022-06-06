const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const inputArray = [];
for(let item of input) {
    const inputValue = item.split(" ").map(Number);
    inputArray.push(inputValue);
}

function solution(arr) {
    let answer = {
        target: [],
        depth: 0,
        sibling: 0
    };
    const [[n, m], ...position] = arr;
    const graph = Array.from({ length: n + 1 }, () => []);
    const visited = Array.from({ length: n + 1 }, () => -1);
    const queue = [];
    // position의 요소만큼 요소를 반복
    for(let nodes of position) {
        // graph에 간선 정보 입력 (양방향 간선 그래프)
        const [ node1, node2 ] = nodes;
        graph[node1].push(node2);
        graph[node2].push(node1);
    }
    // queue에 초기값 설정
    queue.push(1);
    // 방문처리 초기값 설정
    visited[1] = 0;
    // queue에 요소가 없을 때 까지 반복
    while(queue.length) {
        // 현재 노드
        const current = queue.shift();
        // 방문 처리할 노드
        for(let next of graph[current]) {
            // 한번도 방문 하지 않은 노드라면 실행
            if (visited[next] === -1) {
                // 방문 처리
                visited[next] = visited[current] + 1;
                // queue에 노드 삽입
                queue.push(next);
            }
        }
    }
    // 최대 간선 깊이 정제
    let max = Math.max(...visited);
    answer.depth = max;
    // visited의 요소만큼 순회
    visited.forEach((depth, index) => {
        // 노드의 깊이가 max와 같으면 실행
        if(depth === max) {
            // target에 요소 삽입
            answer.target.push(index);
            // 형제 노드 개수 +1
            answer.sibling++;
        }
    });
    // target의 노드 번호를 오름차순 정렬
    answer.target.sort((a,b) => a-b);
    // 정답 정제
    return [answer.target[0], answer.depth, answer.sibling].join(" ");
}

console.log(solution(inputArray));