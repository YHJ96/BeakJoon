const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split("\n");
input.shift();
const inputArray = [];
for(let i = 0; i < input.length; i++) {
    const n = +input[i];
    const total = [];
    for(let j = i + 1; j <= i + n; j++) {
        const item = input[j].trim().split(" ");
        total.push({ price: +item[0], name: item[1] });
    }
    inputArray.push(total);
    i += n;
}

// 선수들의 가격 제일 비싼 선수의 이름을 반환하는 함수
function serachName(arr) {
    // 가격으로 비교해서 정렬
    arr.sort((a,b) => b.price - a.price);
    return arr[0].name;
}

function solution(arr) {
    let answer = [];
    // 배열의 요소만큼 순회
    for(let x of arr) {
        const item = serachName(x);
        answer.push(item);
    }
    // 정답 정제
    return answer.join("\n");
}

console.log(solution(inputArray));