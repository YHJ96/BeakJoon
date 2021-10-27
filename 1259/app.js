const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = input.map((item) => item.trim());
input.pop();

console.log(solution(input));

function solution(n) {
    // 문자열을 배열의 인자로 각각 나누기 위해서 스프레이드 연산자 사용
    let arr = [...n];
    // 정답 출력 폼
    let answer = '';
    for(let i = 0; i < arr.length; i++) {
        // 문자열 인자 정제
        const compare = n[i].split('').reverse().join('');
        // 뒤집어서 원래의 문자열과 같으면 YES출력
        if(compare === arr[i].split('').join('')) answer += 'yes' + '\n';
        else answer += 'no' + '\n'; 
    }
    return answer.trimEnd(); 
} 