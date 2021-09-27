const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
let inputArray = [];
for(let i = 1; i <= +input[0]; i++) {
    inputArray.push(+input[i]);
}

console.log(solution(inputArray));

function solution(num) {
    let answer = '';
    let result = [];
    let prime = [];
    // 최대 범위 숫자로 배열 초기화
    for(let i = 2; i <= 10000; i++) {
        prime[i] = i;
    }
    // 범위에 있는 소수를 에라토스테네스의 체를 사용하여 prime에 push
    for(let i = 2; i <= 10000; i++) {
        if(prime[i] === 0) continue;
        for(let j = i + i; j <= 10000; j += i) {
            prime[j] = 0;
        }
    }
    // 0으로 만든 소수가 아닌 숫자 제거
    prime = prime.filter((item) => item !== 0);
    for(let i = 0; i < num.length; i++) {
        // 골드바흐의 추측이 가능한 숫자중 두개의 피연산자의 절대값의 차가 제일 작은것을 찾기 위해 빈 배열 선언
        let compare = [];
        for(let j = 0; j < prime.length; j++) {
            // 예외처리 골드바흐의 추측을 찾는 소수가 num보다 커지면 break
            if(prime[j] > num[i]) break;
            for(let k = 0; k < prime.length; k++ ) {
                if(prime[j] + prime[k] === num[i]) {
                    // 골드바흐의 숫자가 되면 break
                    compare.push([prime[j], prime[k]]);
                    break;
                }
            }
        }
        // 골드바흐의 추측이 가능한 숫자들의 절대값의 차가 제일 작은 값을 구함
        const flag = compare.map((item) => Math.abs(item[0] - item[1]));
        // min이 compare의 index
        const min = flag.indexOf(Math.min(...flag));
        result.push(compare[min]);
    }
    // 정답 정제
    for(let x of result) {
        answer += `${x[0]} ${x[1]}` + '\n';
    }
    return answer.trimEnd();
}

// 1. 에라토스테네스의 체 사용