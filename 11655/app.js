const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString();

function solution(str) {
    let answer = '';
    // 전체 문자열을 순회
    for(let i = 0; i < str.length; i++) {
        // 문자열의 각각의 요소들을 아스키코드로 치환
        const s = str.charCodeAt(i);
        // 대문자 아스키코드 범위에 있을 경우
        if(s >= 65 && s <= 90) {
            // 아스키코드에 +13을 더하기
            let cnt = s + 13;
            // 대문자 아스키코드 범위를 벗어나면 -26 빼기
            if(cnt > 90) {
                cnt -= 26;
                // 다시 아스키코드를 문자로 치환
                answer += String.fromCharCode(cnt);
            } else answer += String.fromCharCode(cnt);
            // 소문자 아스키코드 범위에 있을 경우
        } else if(s >= 97 && s <= 122) {
            // 소문자 아스키코드 범위를 벗어나면 -26 빼기
            let cnt = s + 13;
            if(cnt > 122) {
                cnt -= 26;
                // 다시 아스키코드를 문자로 치환
                answer += String.fromCharCode(cnt);
            } else answer += String.fromCharCode(cnt);
            // 아스키코드가 알파벳 범위에 없는 경우 str의 해당 인덱스의 요소를 answer문자열에 치환
        } else answer += str[i];
    }
    return answer;
}

console.log(solution(input));