const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const inputArray = input[1].split(' ').map((item) => Number(item));
input = +input[0].split(' ')[1];

solution(input, inputArray);

function solution(num, arr) {
    let answer = 0;
    // 완전 탐색 시작 n개중에 3개를 뽑는 경우의수
    for(let i = 0; i < arr.length - 2; i++) {
        for(let j = i + 1; j < arr.length - 1; j++) {
            for(let k = j + 1; k < arr.length; k++) {
                if(answer < arr[i] + arr[j] + arr[k] && arr[i] + arr[j] + arr[k] <= num) {
                    answer = arr[i] + arr[j] + arr[k];
                }
            }
        }
    }
    console.log(answer);
}