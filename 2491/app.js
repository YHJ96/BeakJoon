// fs 모듈 불가능 88% 오류
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const input = [];
rl.on('line', (line) => {
    if(line.length === 1) input.push(line);
    else input.push(line.split(' ').map(Number));
})
.on('close', () => {
    function solution(arr) {
        const [n, num] = arr;
        let answer = 1;
        let max = 1;
        let min = 1;
        for(let i = 1; i < num.length; i++) {
            if (num[i] <= num[i + 1]) max += 1;
            else max = 1;
            if (num[i] >= num[i + 1]) min += 1; 
            else min = 1;
            const result = Math.max(max, min);
            answer = Math.max(answer, result);
        }
        return answer;
    }
    
    console.log(solution(input));
    process.exit();
});