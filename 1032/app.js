const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const inputArray = [];
for(let i = 1; i < input.length; i++) {
    inputArray.push(input[i].trim());
}

function solution(input) {
    let result = '';
    // cmd창 문자 1개로 비교 시작
    for (let i = 0; i < input[0].length; i++) {
        let compare = input[0][i];
        let flag = true;
        // 0 기준으로 비교함으로 1부터 시작
        for (let j = 1; j < input.length; j++) {
            // 문자열이 다르면 false로 바꾼뒤 탈출
            if (compare !== input[j][i]) {
                flag = false;
                break;
            }
        }
        // flag가 ture면 그대로 문자사용
        if (flag) result += compare;
        else result += "?";
    }
    return result;
}

console.log(solution(inputArray));