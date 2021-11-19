const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = input[0].split(' ').map((item) => +item);

function solution(n, m) {
    let answer = '';
    // 뽑는 개수를 지정하는 배열
    let tmp = Array.from({length : m}, () => 0);
    function DFS(L, num) {
        // 뽑는 개수와 같으면 answer 값 넣기
        if(L === m) {
            answer += tmp.join(' ') + '\n';
        } else {
            for(let i = num; i <= n; i++) {
                // 1부터 시작
                tmp[L] = i;
                // 중복조합이므로 i그대로 가기
                DFS(L+1, i);
            }
        }
    }
    DFS(0, 1);
    return answer.trim();
}

console.log(solution(input[0], input[1]));