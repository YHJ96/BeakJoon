const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
let inputArray = [];
for(let i = 1; i < input.length; i++) {
    inputArray.push(input[i].trim());
}

function solution(arr) {
    let answer = 0;
    // 정사각형의 조건 때문에 행과 열중에 제일 짧은길이를 체크한다.
    let min = Math.min(arr.length, arr[0].length);
    // 2차원 배열 완전탐색
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr[i].length; j++) {
            // 정사각형이므로 min 보다 작은 길이를 체크한다.
            for(let k = 0; k < min; k++) {
                // 정사각형의 행의 최대길이가 배열의 행의 길이를 넘지 못하고 열의 최대길이가 배열의 열의 길이를 넘지 못한다.
                if(i+k < arr.length && j + k < arr[0].length) {
                    // 정사각형 3개의 꼭지점 체크
                    if(arr[i][j] === arr[i][j+k] && arr[i][j] === arr[i+k][j] && arr[i][j] === arr[i+k][j+k]) {
                        // 정사각형의 넓이
                        const width = (k + 1) ** 2;
                        // 제일큰곳 탐색
                        answer = Math.max(answer, width);
                    }
                }
            }
        }
    }
    return answer;
}

console.log(solution(inputArray));