const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
input.shift();
const inputArray = [];
for (let i = 0; i < input.length; i += 2) {
    const inputValue = input[i + 1].split(' ');
    inputArray.push(inputValue);
}

// 문자열을 만드는 함수 생성
function createString(arr) {
    const compare = [];
    // arr의 요소가 없을 때 까지 반복 실행
    while (arr.length) {
        const item = arr.shift();
        // 첫 번째 요소 예외처리
        if (compare.length === 0) {
            compare.push(item);
            continue;
        }
        // 사전순으로 해당 요소보다 앞이거나 같으면 unshift
        if (item.localeCompare(compare[0]) === -1 || item.localeCompare(compare[0]) === 0) {
            compare.unshift(item);
            continue;
        }
        // 사전순으로 해당 요소보다 뒤거나 같으면 push
        if (item.localeCompare(compare[compare.length - 1]) === 1 || item.localeCompare(compare[compare.length - 1] === 0)) {
            compare.push(item);
            continue;
        }
    }
    // 배열 정제
    return compare.join('');
}

function solution(arr) {
    const answer = [];
    // 배열의 요소만큼 순회 시작
    for (let x of arr) answer.push(createString(x));
    // 정답 정제
    return answer.join('\n');
}

console.log(solution(inputArray));