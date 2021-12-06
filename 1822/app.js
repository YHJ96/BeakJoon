const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const a = input[1].split(' ').map((item) => +item);
const b = input[2].split(' ').map((item) => +item);

function solution(a, b) {
    const result = [];
    const numHash = new Map();
    // 차집합을 구하기 위해서 b인자를 Map함수에 넣기
    for(let bItem of b) {
        numHash.set(bItem, 1);
    }
    for(let aItem of a) {
        // Map함수에 a인자가 없으면 result에 인자 넣기
        if(!numHash.has(aItem)) result.push(aItem);
    }
    // 차집합이 없을경우 0을 반환
    if(result.length === 0) return 0;
    // 정답 정제
    let answer = result.length + '\n';
    result.sort((a,b) => a-b);
    answer += result.join(' ');
    return answer;
} 

console.log(solution(a, b));