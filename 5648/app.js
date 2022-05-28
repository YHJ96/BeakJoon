const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const inputArray = [];
for (let i = 0; i < input.length; i++) {
    const inputValue = input[i].split(" ").map(Number);
    if (i === 0) inputValue.shift();
    inputArray.push(...inputValue);
}
// Js로 해결 불가능 C++로 해결 정수 범위 10^12 Bigint 예외처리 했으나 출력이 안됨

function solution(arr) {
    let answer = [];
    for(let num of arr) {
        // 문자열의 배열로 바꾸고 뒤집은 다음에 다시 문자열로 치환
        const toStr = [...num.toString()].reverse().join('');
        // 정수 범위 예외처리를 위한 예외처리
        answer.push(BigInt(toStr));
    }
    // 정렬 시작 Bigint 오름차순 정렬
    answer.sort((a,b) => {
        if(a - b > 0n) return 1;
        else if (a - b < 0n) return -1;
        else return 0;
    });
    // 정답 정제
    return answer.join("\n");
}

console.log(solution(inputArray))