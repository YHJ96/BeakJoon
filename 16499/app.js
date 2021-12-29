const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input.shift();
const inputArray = [];
for (let x of input) {
    const item = x.trim();
    inputArray.push(item);
}

function solution(arr) {
    // 그룹단어를 체크할 배열 생성
    const groupWord = [];
    for(let x of arr) {
        // 단어를 인자별로 쪼갠뒤 배열에 넣고 정렬하여 그룹할수 있는지 확인
        const item = [...x];
        item.sort();
        // 문자열로 조합해서 다시 배열에 넣기
        groupWord.push(item.join(''));
    }
    const answer = new Map();
    // 그룹단어가 몇개 있는지 확인
    for(let x of groupWord) {
        // Map함수안에 없을 경우 키를 생성해서 만들어주고 있을 경우 인자에 +1를 해준다.
        if(!answer.has(x)) answer.set(x, 1);
        else answer.set(x, answer.get(x) + 1);
    }
    // 그룹단어 개수 Map안의 인자의 개수를 반환
    return answer.size;
}

console.log(solution(inputArray));