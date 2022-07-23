const fs = require("fs");
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(arr) {
    const [ word, n, ...types] = arr;
    const target = [...word];
    const stack = [];
    for(let type of types) {
        // 예외처리 빈 배열인 경우 undefined 삽입
        // 왼쪽 커서를 움직일 때 오른쪽으로 문자를 보냄
        if (type[0] === 'L' && target.length > 0) stack.push(target.pop());
        // 오른쪽 커서를 움직일 떄 왼쪽으로 문자를 보냄
        if (type[0] === 'D' && stack.length > 0) target.push(stack.pop());
        // 지우거나 추가하는 행동들이 전부 왼쪽으로 진행함으로 왼쪽 진행
        if (type[0] === 'P') target.push(type[2]);
        if (type[0] === 'B') target.pop();
    }
    // 정답 정제
    return target.join('') + stack.reverse().join('');
}

console.log(solution(input));