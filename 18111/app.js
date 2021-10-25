const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const inputArray = [];
const block = +input[0].split(' ')[2];
for(let i = 1; i < input.length; i++) {
    const inputValue = input[i].split(' ').map((item) => +item);
    inputArray.push(inputValue);
}

// 시간초과
function solution(block, arr) {
    let min = Number.MAX_SAFE_INTEGER;
    let answer = [];
    const copyArr = [];
    for(let y = 0; y < arr.length; y++) {
        for(let x = 0; x < arr[y].length; x++) {
            copyArr.push(arr[y][x]);
        }
    }
    for(let i = 0; i <= 256; i++) {
        let count = 0;
        let n = block;
        const newArr = [...copyArr];
        for(let j = 0; j < newArr.length; j++) {
            if(newArr[j] >= i) {
                while(newArr[j] !== i) {
                    newArr[j] -= 1;
                    n += 1;
                    count += 2;
                }
            } else {
                while(newArr[j] <= i) {
                    newArr[j] += 1;
                    n -= 1;
                    count += 1;
                }
            }
        }
        if(n < 0) continue;
        else {
            if(min > count) {
                min = count;
                answer[0] = count;
                answer[1] = i;
            }
        }
    }
    return answer.join(' ');
}

console.log(solution(block, inputArray));