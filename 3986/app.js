const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const inputArray = [];
for(let i = 1; i < input.length; i++) {
    const item = input[i].trim();
    inputArray.push(item);
}

function solution(arr) {
    let answer = 0;
    // 단어의 개수만큼 탐색시작
    for(let i = 0; i < arr.length; i++) {
        // 스택을 사용하기 위한 빈 배열 선언
        const word = [];
        // 단어의 길이만큼 탐색시작
        for(let item of arr[i]) {
            // 첫번째 실행을 위해 length를 확인하고 제일 뒤에 있는 단어가 현재 단어와 같으면 삭제
            if(word.length && word[word.length - 1] === item) word.pop();
            // 조건이 아니면 push
            else word.push(item);
        }
        // 선끼리 교차하지 않으면 연속되어있는 단어이므로 모든 단어가 빠져나갔으면 answer + 1
        if(word.length === 0) answer += 1;
    }
    return answer;
}

console.log(solution(inputArray));