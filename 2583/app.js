const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const inputArray = [];
for(let i = 0; i < input.length; i++) {
    const inputValue = input[i].split(' ').map(Number);
    inputArray.push(inputValue);   
}

function solution(inputArray) {
    let answer = [];
    // 구조분해할당을 이용해서 2차원의 길이와 각각의 꼭지점의 좌표를 초기화
    const [ [n, m], ...position ] = inputArray;
    // 2차원 배열 초기화
    const board = Array.from({ length : n }, () => Array.from({ length : m }, () => 0));
    // 4방 탐색
    const dy = [1, 0, -1, 0];
    const dx = [0, 1, 0, -1];
    let count = 0;
    // 요소만큼 실행
    position.forEach((item) => {
        let [leftX, leftY, rightX, rightY] = item;
        // 좌표평면을 블록단위로 생각하기 위해서 사각형의 좌표의 끝과 시작이 1만큼 커서 -1을 해줘야한다. (좌표평면의 x,y 넓이의 x,y의 차이)
        rightX -= 1;
        rightY -= 1;
        // 사각형 좌표에서 넓이 만큼 1 추가
        for(let i = leftY; i <= rightY; i++) {
            for(let j = leftX; j <= rightX; j++) {
                board[i][j] = 1;
            }
        }
    });
    // 깊이우선탐색 실행
    function DFS(y, x) {
        // 방문처리
        board[y][x] = 1;
        // 공간의 개수
        count++;
        // 4방 탐색 시작
        for(let i = 0; i < 4; i++) {
            const ny = y + dy[i];
            const nx = x + dx[i];
            // 예외처리
            if(ny >= 0 && ny < n && nx >= 0 && nx < m && board[ny][nx] === 0) {
                // 계속 0을 찾아 내려감
                DFS(ny, nx);
            }
        }
    }
    // 완전탐색 실행
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            // 빈 공간을 찾으면 깊이우선탐색 실행
            if(board[i][j] === 0) {
                DFS(i, j);
                answer.push(count);
                // 변수 초기화
                count = 0;
            }
        }
    }
    // 빈 공간의 개수를 오름차순으로 정렬
    answer.sort((a,b) => a-b);
    // 빈 공간의 개수를 answer에 push
    answer.unshift(answer.length);
    const [answerLength, ...answerCount] = answer;
    // 정답 정제
    return answerLength + '\n' + answerCount.join(' ');
}

console.log(solution(inputArray));