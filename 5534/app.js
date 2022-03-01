const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n")[0];

function solution(s) {
    let answer = Number.MAX_SAFE_INTEGER;
    const num = new Set();
    let tmp = Array.from({length : s.length}, () => 0);
    let ck = Array.from({length : s.length}, () => 0);
    // 단어의 자리 변경을 위한 DFS
    function DFS(L) {
        if(L === s.length) {
            const item = tmp.slice().join("");
            // 숫자가 이미 있을경우 return으로 예외처리
            if(num.has(item)) return;
            else num.add(item);
        } else {
            // 문자열 길이만큼 탐색
            for(let i = 0; i < s.length; i++) {
                // ck[i]가 0일 경우 실행
                if(ck[i] === 0) {
                    // 탐색을 했으면 1로 바꿔주기
                    ck[i] = 1;
                    // 배열에 인자를 삽입
                    tmp[L] = s[i];
                    // DFS로 레벨 내려가기
                    DFS(L+1);
                    // ck[i]를 0 으로 초기화
                    ck[i] = 0;
                }
            }
        }
    }
    DFS(0);
    // 가능한 순열의 숫자에서 탐색시작
    num.forEach((item) => {
        // 문자열로 바꾼 순열로 위치를 바꾼 숫자와 원래 숫자를 비교
        if(+item > +s) answer = Math.min(+item, answer);
    });
    // 원래 들어온 숫자보다 큰게 없을경우 예외처리
    if(answer === Number.MAX_SAFE_INTEGER) return 0;
    return answer;
}

console.log(solution(input));