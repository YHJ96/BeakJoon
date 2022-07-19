const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input.forEach((item, index, array) => {
    array[index] = item.split(' ').map(Number);
});

function solution(arr) {
    // 최소값을 구해야함으로 0번 인덱스는 자리를 맞추기 위한 것으로 MAX 값으로 초기화
    let answer = [ Number.MAX_SAFE_INTEGER ];
    const [[n, m ], ...position] = arr;
    // 그래프와 방문처리 변수 초기화
    const graph = Array.from({ length: n + 1 }, () => []);
    const visited = Array.from({ length: n + 1 }, () => 0);
    // 좌표의 요소만큼 반복문 시작
    for(let nodes of position) {
        const [node1, node2] = nodes;
        // 양방향 간선 그래프 등록
        graph[node1].push(node2);
        graph[node2].push(node1);
    }
    // 1 ~ n 번 노드까지 반복 실행
    for(let i = 1; i <= n; i++) {
        // 너비 우선 탐색 시작
        const queue = [i];
        while(queue.length) {
            const current = queue.shift();
            for(let next of graph[current]) {
                // 예외처리
                if (visited[next] !== 0) continue;
                // 방문처리
                visited[next] = visited[current] + 1;
                // 다음 좌표 탐색 시작
                queue.push(next);
            }
        }
        // 해당 노드를 제외하고 모든 노드의 깊이를 더함
        const count = visited.reduce((acc, curr) => acc + curr) - visited[i];
        // answer에 push
        answer.push(count);
        // 방문 초기화
        visited.fill(0);
    }
    // 제일 작은 수 추출
    const traget = Math.min(...answer);
    // 정답 정제
    return answer.indexOf(traget);
}

console.log(solution(input));