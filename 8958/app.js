const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const inputArray = [];
for(let i = 1; i <= Number(input[0]); i++) {
    const inputValue = input[i].trim();
    inputArray.push(inputValue);
}

solution(inputArray)

function solution(n) {
    let answer = '';
    for(let i = 0; i < n.length; i++) {
        const nItem = [...n[i]];
        let result = 0;
        let add = 0;
        // 인자가 0일 경우 add 더해주기
        for(let j = 0; j < nItem.length; j++) {
            if(nItem[j] === 'O') {
                add++;
                result += add;
            } else add = 0;
        }
        answer += result + '\n';
    }
    console.log(answer);
}