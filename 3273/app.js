const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const arr = input[1].split(' ').map((item) => +item);
const target = +input[2];

function solution(arr, target) {
    // 오름차순 정렬
    arr.sort((a,b) => a-b);
    let answer = 0;
    let lb = 0;
    let rb = arr.length - 1;
    // lb랑 rb가 같아지면 정지
    while(lb < rb) {
        // lb + rb의 합 양끝을 비교
        const sum = arr[lb] + arr[rb];
        if(sum === target) answer++;
        // sum이 작거나 같으면 lb증가 lb가 증가해야 sum이 증가
        if(sum <= target) lb++;
        // sum이 크면 rb감소 rb가 감소하면 sum이 감소
        else rb--;
    }
    return answer;
}

console.log(solution(arr, target));