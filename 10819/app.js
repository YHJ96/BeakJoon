const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n")[1].split(" ");

function solution(arr) {
    const answer = [];
    const num = [];
    const n = arr.length;
    // 배열의 요소를 저장할 공간 초기화
    const tmp = Array.from({ length: n }, () => 0);
    // 중복되는 숫자가 없도록 체크하는 배열 초기화
    const ck = Array.from({ length: n }, () => 0);
    // DFS 시작
    function DFS(L) {
        if(L === n) {
            // 배열은 참조값으로 마지막 인수만 출력되는걸 방지해야함 배열을 복사해서 push
            num.push(tmp.slice());
        } else {
            // 백트래킹 시작 
            for(let i = 0; i < n; i++) {
                // 체크 요소가 0일 경우
                if(ck[i] === 0) {
                    // 체크 요소를 1로 바꾼다.
                    ck[i] = 1;
                    // tmp에 arr 요소를 넣어줌
                    tmp[L] = arr[i];
                    // 단계 내려감
                    DFS(L+1);
                    // 단계를 돌아오면서 0으로 바꿔줌
                    ck[i] = 0;
                }
            }
        }
    }
    DFS(0);
    num.forEach((item) => {
        let sum = 0;
        // 모든 수의 차를 구하기 위해 2중 포문
        for(let i = 0; i < item.length; i++) {
            // 예외처리 방지
            if(i === item.length - 1) continue;
            // 해당 요소를 숫자로 치환한뒤 차를 구한뒤 절대값
            const add = Math.abs(Number(item[i + 1]) - Number(item[i]));
            sum += add; 
        }
        answer.push(sum);
    });
    // 정답 정제
    return Math.max(...answer);
}

console.log(solution(input));