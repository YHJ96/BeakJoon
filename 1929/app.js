const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = input[0].split(' ').map((item) => +item);

console.log(solution(input));

function solution(input) {
    let n = input[1];
    let arr = [];
    let answer = '';
    // 2부터 n까지 배열 초기화
    for(let i = 2; i <= n; i++) {
        arr[i] = i;
    }
    for(let i = 2; i <= n; i++) {
        // 0을 만나면 아래로 내려가지않고 진행
        if(arr[i] == 0) continue;
        for(let j = i+i; j <= n; j += i) {
            // i가 자기자신을 빼고 배수들을 0으로 할당
            arr[j] = 0;
        }
    }
    for(let x of arr) {
        // input[0]의 범위를 위해서 사용
        if(x !== 0 && x >= input[0]) {
            answer += x + '\n';
        }
    }
    return answer.trimEnd();
}

// 1. 에라토스테네스의 체 사용 