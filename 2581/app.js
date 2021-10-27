const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

console.log(solution(+input[0], +input[1]));

function solution(min, max) {
    let numArr = [];
    // 소수가 아닌것들을 비교할 빈 배열 선언
    let compare = [];
    // min ~ max의 값까지 숫자 넣기
    for(let i = min; i <= max; i++) {
        numArr.push(i);
    }
    // 범위의 숫자만큼 반복문
    for(let j = 0; j < numArr.length; j++) {
        // 숫자 1은 소수가 아니므로 compare에 넣기
        // 예외처리
        if(numArr[j] === 1) {
            compare.push(1);
            continue;
        }
        // 소수는 1과 자기자신밖에 나눠지지 않는 수
        let count = 2;
        while(count <= numArr[j] - 1) {
            if(numArr[j] % count === 0) {
                compare.push(numArr[j]);
                break;
            }
            count++;
        }
    }
    if(compare.length === numArr.length) return -1;
    // compare에 있는 숫자들이 소수가 아닌 숫자이므로 비교해서 소수 구하기
    const answer = numArr.filter((item) => !compare.includes(item));
    const numMin = Math.min(...answer);
    const numSum = answer.reduce((acc, curr) => acc + curr);
    const result = `${numSum}\n${numMin}`;
    return result;
} 