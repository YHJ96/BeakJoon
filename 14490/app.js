const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n')[0];

// 최대공약수 찾는 함수 (유클리드 호제법)
function gcdFind(a,b) {
    let r = 0;
    let max = 0;
    // r이 0이 되면 break
    while(true) {
      r = a % b;
      a = b;
      b = r;
      if(r === 0) {
        max = a;
        break
      }
    }
    return max;
}

function solution(s) {
    // ':' 기준으로 추출
    let [one, two] = s.split(':').map((item) => +item);
    // 최대공약수
    const gcd = gcdFind(one, two);
    one /= gcd;
    two /= gcd;
    // 출력폼
    const answer = one + ':' + two;
    return answer; 
}

console.log(solution(input));