const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n').map((item) => +item);

function solution(arr) {
    const w = [];
    const k = [];
    // arr의 요소를 10개씩 나눈다.
    for (let i = 0; i < arr.length; i++) {
        if (i < 10) w.push(arr[i]);
        else k.push(arr[i]);
    }
    // 오름차순 정렬
    w.sort((a,b) => b-a);
    k.sort((a,b) => b-a);
    // 상위 3개의 점수를 더한다.
    const wSum = w[0] + w[1] + w[2];
    const kSum = k[0] + k[1] + k[2];
    // 정답 정제
    return wSum + " " + kSum; 
}

console.log(solution(input));