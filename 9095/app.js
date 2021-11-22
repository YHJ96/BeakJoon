const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input.shift();
input = input.map((item) => +item);

function countNum(n) {
    let answer = 0;
    // 1,2,3 으로만 숫자를 나타냄으로 기본 배열 선언
    const add = [1,2,3];
    function DFS(L, sum) {
        // 해당 숫자보다 커지면 DFS 재귀 종료
        if(sum > n) return;
        // 숫자가 같다면 answer을 1 증가
        if(sum === n) answer++;
        else {
            // 반복문으로 백트래킹 시작
            for(let i = 0; i < add.length; i++) {
                DFS(L+1, sum + add[i]);
            }
        }
    }
    DFS(0, 0);
    return answer;
}

function solution(arr) {
    let answer = '';
    for(let x of arr) {
        // 정답 출력
        answer += countNum(x) + '\n';
    }
    return answer.trim();
}

console.log(solution(input));