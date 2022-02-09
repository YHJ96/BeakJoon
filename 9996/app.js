const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const inputArray = [];
for(let i = 1; i < input.length; i++) {
    const item = input[i].trim();
    inputArray.push(item);
}
const [code, ...word] = inputArray;

// 단어가 패턴이랑 맞는지 확인하는 함수
function serachWord(code, word) {
    let answer = "DA";
    // 패턴을 '*'기준으로 나눈다.
    const compare = code.split('*');
    const [front, end] = compare;
    // 만약에 패턴의 길이가 단어의 길이보다 크다면 성립할수 없으므로 "NE" return
    if(front.length + end.length > word.length) return "NE";
    // 앞에 있는 단어가 front와 다르다면 "NE" retrun
    else if(word.indexOf(front) !== 0) return "NE";
    // 마지막 단어가 패턴단어와 다르면 "NE" return
    else if(word.substring(word.length - end.length, word.length) !== end) return "NE";
    return answer;
}

function solution(code, word) {
    let answer = [];
    // word의 요소만큼 탐색시작
    for(let i = 0; i < word.length; i++) {
        const item = serachWord(code, word[i]);
        answer.push(item);
    }
    // 정답 정제
    return answer.join("\n");
}

console.log(solution(code, word));