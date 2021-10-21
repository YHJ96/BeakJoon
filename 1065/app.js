const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = +input[0];

function solution(input) {
    const arr = [];
    for(let i = 1; i <= input; i++) {
        // 1 ~ 99 까지는 등차수열
        if(i < 100) {
            arr.push(i);
        } else if(i >= 100 && i < 1000) {
            // 100 ~ 999 까지는 두번째 자리와 첫번째 자리의 차와 세번째 자리와 두번째 자리의 차가 같으면 등차 수열이 성립한다.
            i = i.toString();
            console.log(i);
            // 암묵적 형변환 사용 (+)빼고 산술연산자를 넣었을 때 숫자형으로 자동 타입반환
            if(i[1] - i[0] === i[2] - i[1]) {
                arr.push(i);
            }
        } 
    }
    let answer = arr.length;
    return answer;
}

console.log(solution(input)); 