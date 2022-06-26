const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = +fs.readFileSync(filePath).toString().trim();

// 소수체크 함수 생성
const isPrime = (num) => {
    // 제곱근 까지만 계산하여 속도 향상
    let end = Math.sqrt(num);
    if (num < 2) return false;
    // 어떤 수라도 나눠지면 바로 함수 정지
    else for (let i = 2; i <= end; i++) if (num % i === 0) return false;
    return true;
};

const isPalindrome = (num) => {
    // 팰린드롬을 체크하기 위해서 배열에 담은뒤 뒤집고 문자열로 치환
    const compare = [...num.toString()].reverse().join('');
    if (Number(compare) === num) return true;
    else return false;
};

function solution(n) {
    let answer = 0;
    // 1 ~ 1000000 까지 실행
    for (let i  = n; i < 10000000; i++) {
        if (isPrime(i) && isPalindrome(i)) {
            answer = i;
            break;
        }
    }
    return answer;
}

console.log(solution(input));