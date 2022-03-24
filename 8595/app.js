const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n")[1];

function solution(s) {
    let answer = [];
    let number = [];
    // 숫자를 찾을 배열 초기화
    let compare = ['0','1','2','3','4','5','6','7','8','9'];
    // while문에서 n을 0부터 시작하기 위해서 지정
    let n = -1;
    while(n++ !== s.length) {
        // compare에 있는 요소가 맞으면 number 배열에 s[n] push
        if(compare.includes(s[n])) number.push(s[n]);
        // compare에 요소가 없으면 num의 요소를 합쳐서 문자로 만든뒤 push
        else if(!compare.includes(s[n])) {
            const num = number.join('');
            answer.push(num);
            // 배열 초기화
            number = [];
            // 마지막 조건 예외처리 마지막이 숫자일 경우
        } else if(number.length !== 0 && n === s.length - 1) {
            const num = number.join('');
            answer.push(num);
        }
    }
    // 숫자가 없을 경우 예외처리
    if(answer.length === 0) return 0;
    // 문자열로 되어있는 숫자를 number로 바꾼 뒤 배열에 있는 모든 숫자들을 더해줌
    answer = answer.map((item) => +item).reduce((acc, curr) => acc + curr);
    return answer;
}

console.log(solution(input));