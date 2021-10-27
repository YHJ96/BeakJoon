const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const inputArray = input[1].split(' ').map((item) => +item);
const inputChoice = input[3].split(' ').map((item) => +item);

console.log(solution(inputArray, inputChoice));

function solution(arr, choice) {
    const result = [];
    // 키와 값을 사용하기 위해 Map함수 지정 Set은 중복을 제거함으로 Map이용
    const compare = new Map();
    // x가 compare에 없으면 그 인자를 키로 하고 값을 1로 만들고 있으면 1 증가
    for(let x of arr) {
        if(compare.has(x)) compare.set(x, compare.get(x) + 1);
        else compare.set(x, 1);
    }
    // x가 값이 있으면 그 키의 값을 result에 넣기 없으면 0 넣기
    for(let x of choice) {
        if(compare.get(x)) result.push(compare.get(x));
        else result.push(0);
    }
    // 정답 정제
    let answer = '';
    for(let x of result) {
        answer += x + ' ';
    }
    return answer;
} 