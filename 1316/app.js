const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const inputArray = [];
for(let i = 1; i <= Number(input[0]); i++) {
    const inputValue = input[i].trim();
    inputArray.push(inputValue);
}

solution(inputArray);

function solution(s) {
    let answer = 0;
    // 그룹단어 체크시작
    for(let i = 0; i < s.length; i++) {
        const word = s[i];
        let prevWord = word[0];
        let bool = true;
        // 앞에 문자 탐색 시작
        for(let j = 1; j < word.length; j++) {
            if(prevWord === word[j]) continue;
            // 문자를 복사해서 확인 length가 바뀜에 유의
            if(word.slice(j).includes(prevWord)) {
                // 인자가 있으면 false출력
                bool = false;
                break;
            } else prevWord = word[j];
        }
        // 단어체크
        if(bool) answer += 1;
    }
    console.log(answer);
}