const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const check = input[0].split(' ').map((item) => +item);
const arr1 = [];
const arr2 = [];
for(let i = 1; i < input.length; i++) {
    if(check[0] >= i) {
        arr1.push(input[i].trim());
    } else arr2.push(input[i].trim());
}

console.log(solution(arr1, arr2));

function solution(arr1, arr2) {
    // filter를 이용해서 중복값 추출은 시간제한
    // Obj를 이용해서 시간 줄이기
    const mySet = new Set(arr1);
    let answer = '';
    let count = 0;
    const result = [];
    for(let x of arr2) {
        // mySet에 그 값이 있으면 count증가 시키고 result에 push
        if(mySet.has(x)) {
            count += 1;
            result.push(x);
        }
    }
    result.sort();
    for(let x of result) {
        answer += x + '\n';
    }
    return count + '\n' + answer.trimEnd();
} 