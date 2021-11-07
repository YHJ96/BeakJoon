const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const inputArray = []
for(let i = 1; i < input.length; i++) {
    inputArray.push(+input[i].trim());
}
const n = +input[0].split(' ')[1]

// 해결실패 입출력 에러 
function solution(k, lines) {
    const sum = lines.reduce((a, b) => a + b, 0);
    let answer = 0
    let min = 1
    let max = parseInt(sum / k)
    let mid = 0,

    while (min <= max) {
        mid = parseInt((max + min) / 2)
        let isPossible = splitable(mid)
        if (isPossible) {
            min = mid + 1
            if (answer < mid) answer = mid
        } else {
            max = mid - 1
        }
    }

    function splitable(mid) {
        let count = 0
        lines.forEach(a => {
            count += parseInt(a / mid)
        })
        return count >= k
    }
    return answer;
}

console.log(solution(n, inputArray));