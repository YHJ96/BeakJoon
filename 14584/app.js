const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const word = [];
for(let i = 2; i < 2 + +input[1]; i++) {
    const item = input[i].trim();
    word.push(item);
}

function solution(s, word) {
    let answer = '';
    let result = [];
    // 알파벳 개수만큼 반복실행
    for(let i = 1; i <= 26; i++) {
        let key = '';
        // 암호화된 문자를 아스키코드로 바꿔줌
        for(let j = 0; j < s.length; j++) {
            let code = s.charCodeAt(j) - i;
            // 소문자 a보다 작으면 실행
            if(code < 97) {
                // 26에서 i를 빼주면 얼만큼 앞에 있는지 확인가능
                const n = 26 - i;
                // code를 원상복귀
                code += i;
                // code에 n을 더해줌
                code += n;
                // 아스키코드에 대응하는 문자로 바꿔줌
                key += String.fromCharCode(code);
            } else key += String.fromCodePoint(code);
        }
        // 복호화된 키 result에 넣기
        result.push(key);
    }
    // 복화화된 문자를 조건에 맞는지 확인
    for(let item of result) {
        // 단어장에 그 암호가 포함되어 있으면 정답
        for(let compare of word) {
            if(item.includes(compare)) {
                answer = item;
            }
        }
    }
    return answer;
}

console.log(solution(input[0].trim(), word));