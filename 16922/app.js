const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = +fs.readFileSync(filePath).toString().trim().split('\n');

function solution(n) {
    let answer = [];
    // 숫자 4개 초기화
    const arr = [1, 5, 10, 50];
    // 배열의 조합을 담을 빈배열 초기화
    let tmp = Array.from({length : n}, () => 0);
    // 백트래킹 선언
    function DFS(L, s) {
        // n개 만큼 뽑았을때 정지
        if(L === n) {
            // n개의 합을 출력
            const sum = tmp.slice().reduce((acc, curr) => acc + curr);
            answer.push(sum);
        } else {
            // 백트래킹 시작
            for(let i = s; i < arr.length; i++) {
                // tmp에 i를 넣기
                tmp[L] = arr[i];
                // 다음 레벨로 넘어가기
                DFS(L+1, i);
            }
        }
    }
    DFS(0, 0);
    // 정답 정제
    return answer.length;
}

console.log(solution(input));