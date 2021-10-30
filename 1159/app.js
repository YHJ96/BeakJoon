const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const inputArray = [];
for(let i = 1; i < input.length; i++) {
    inputArray.push(input[i].trim());
}

function solution(name) {
    // 선수이름을 사전순으로 미리정렬
    name.sort();
    let answer = '';
    const myMap = new Map();
    // 첫 스펠링이 있으면 Map에 넣어줌
    for(let x of name) {
        if(myMap.has(x[0])) {
            myMap.set(x[0], myMap.get(x[0]) + 1);
        } else myMap.set(x[0], 1);
    }
    // 알파벳 갯수가 5개 이상인거만 추출
    myMap.forEach((item, index) => {
        if(myMap.get(index) >= 5) answer += index;
    })
    // 예외처리
    if(answer.length === 0) answer = 'PREDAJA';
    return answer;
}

console.log(solution(inputArray));