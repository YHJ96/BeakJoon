const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const inputArray = [];
for (let i = 1; i < input.length; i++) {
    const item = input[i].trim().split(' ').map((item) => +item);
    inputArray.push(item);
}

// 유클리드 호제법으로 최소공배수 찾기
// 유클리드 호제법 X % Y = R -> Y % R = R1 ...
function searchLCM(arr) {
    let n1 = arr[0];
    let n2 = arr[1];
    let r = 0;
    let gcf = 0;
    while (true) {
        r = n1 % n2;
        n1 = n2;
        n2 = r;
        if (r === 0) {
            gcf = n1;
            break
        }
    }
    const lcm = (arr[0] * arr[1]) / gcf;
    return lcm; 
}

function solution(arr) {
    let answer = '';
    // 정답 정제
    for(let x of arr) {
        const item = searchLCM(x);
        answer += item + '\n';
    }
    return answer.trim();
}

console.log(solution(inputArray));