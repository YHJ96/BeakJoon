const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const inputArray = [];
for(let x of input) {
    inputArray.push(x.trim());
}
inputArray.pop();

// 인자들 반환 함수 생성
function checkItem(s) {
    let answer = 'yes';
    // stack 공간지정
    let stack = [];
    // 괄호인 요소들만 비교하기 위해 생성
    const compare = ['[', ']', '(', ')'];
    // 괄호의 요소들만 filter
    s = [...s].filter((item) => compare.includes(item));
    // 괄호의 요소가 없으면 return
    if(s.length === 0) return answer;
    // 괄호의 시작이 '(', '[' 아니면 no 반환
    if(s[0] !== '(' && s[0] !== '[') return 'no';
    for(let i = 0; i < s.length; i++) {
        // stack size 지정해서 변동하는 length 때문에 생성
        const size = stack.length;
        stack.push(s[i]);
        if(s[i] === ')' && stack[size - 1] === '(' && i - 1 >= 0) {
            // ')'에 해당 되고 그 전 인덱스의 값이 '('에 해당되면 2개 제거
            stack.pop();
            stack.pop();
        }
        if(s[i] === ']' && stack[size - 1] === '[' && i - 1 >= 0) {
            // ']'에 해당 되고 그 전 인덱스의 값이 '['에 해당되면 2개 제거
            stack.pop();
            stack.pop();
        }
    }
    // stack에 길이가 0이 아니라면 올바른 괄호가 아님
    if(stack.length !== 0) answer = 'no';
    return answer;
}

function solution(arr) {
    let answer = '';
    // array 만큼 반환
    for(let x of arr) {
        const item = checkItem(x);
        answer += item + '\n';
    }
    return answer.trim();
}

console.log(solution(inputArray)); 