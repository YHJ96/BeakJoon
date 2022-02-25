const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n')[1].split(' ').map((item) => +item);

function solution(arr) {
    // 전체 숫자의 합을 구하기
    const sum = arr.reduce((acc, curr) => acc + curr);
    // 백트래킹을 위한 check 배열 구현
    const check = Array.from({length : arr.length}, () => 0);
    // 중복된 숫자를 위해서 Set 함수 지정
    const total = new Set();
    // 백트래킹 시작
    function DFS(L) {
        // 배열의 끝까지 갔으면 정지
        if(L === arr.length) {
            let add = 0;
            // check 배열이 1 인것만 확인
            for(let i = 0; i < check.length; i++) {
                if(check[i] === 1) add += arr[i]; 
            }
            // total에 넣어주기
            total.add(add);
        } else {
            // 체크배열을 1로 바꾸기
            check[L] = 1;
            // 레벨 하나씩 내려가기
            DFS(L+1);
            // 체크배열을 0으로 바꾸기
            check[L] = 0;
            // 레벨 하나씩 내려가기
            DFS(L+1);
        }
    }
    DFS(0);
    // 정답 정제
    const answer = sum - (total.size - 1);
    return answer;
}

console.log(solution(input));