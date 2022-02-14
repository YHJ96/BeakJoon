const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const m = +input[1];
const arr = input[2].split(' ').map((item) => +item);

function solution(m, arr) {
    let answer = 0;
    // 오름차순 정렬
    arr.sort((a,b) => a-b);
    // 전체의 경우의 수에서 2개씩 뽑기
    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            // 2개의 값이 m 이랑 같으면 answer += 1
            if(arr[i] + arr[j] === m) answer += 1;
        }
    }
    return answer;
}

console.log(solution(m, arr));