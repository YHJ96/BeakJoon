const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const inputArray = [];

for(let i = 0; i < input.length; i++) {
    const inputValue = input[i].split(' ');
    inputArray.push(inputValue);
}

function solution(arr) {
    let answer = ['', '', ''];
    const [[n], ...nodes] = arr;
    const graph = {};
    // 노드의 요소만큼 트리의 간선 정보를 입력
    for(let node of nodes) {
        const [idx, node1, node2] = node;
        graph[idx] = [node1, node2];
    }
    // 깊이 우선 탐색 실행 함수
    function DFS(node) {
        // 비어 있는 노드면 함수 return
        if (node === ".") return;
        // 이진 트리이기 때문에 노드의 수는 무조건 2개 이므로 구조분해할당으로 진행
        const [node1, node2] = graph[node];
        // preOrder
        answer[0] += node;
        DFS(node1);
        // inOrder
        answer[1] += node;
        DFS(node2);
        // postOrder
        answer[2] += node;
    }
    // A부터 탐색
    DFS("A");
    // 정답 정제
    return answer.join("\n");
}

console.log(solution(inputArray));