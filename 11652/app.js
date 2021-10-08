const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = input.map((item) => BigInt(item));
input.shift();
console.log(solution(input));

function solution(n) {
    let answer = [];
    // 객체로 계산하기
    const myMap = new Map();
    for(let x of n) {
        // 인자가 없으면 키를 인자로하고 값을 1로 초기화
        if(myMap.has(x) === false) myMap.set(x, 1);
        // 인자가 있으면 키를 인자로하고 값을 1 더하기
        else myMap.set(x, myMap.get(x) + 1);
    }
    myMap.forEach((item, index) => {
        answer.push([index, item]);
    })
    // 개수로 정렬
    answer.sort((a,b) => b[1] - a[1]);
    // BigInt 때문에 toString()으로 명시적 타입변환
    return answer[0][0].toString();
}