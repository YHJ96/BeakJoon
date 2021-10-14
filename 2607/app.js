const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const strArr = [];
let str = '';
for (let i = 1; i <= +input[0]; i++) {
    if (i === 1) str = input[i].trim();
    else strArr.push(input[i].trim());
}

console.log(solution(str, strArr));

// 실패
function solution(str, strArr) {
    const compare = [...str];
    let answer = 0;
    for (let i = 0; i < strArr.length; i++) {
        let count = 0;
        const item = strArr[i].split('');
        for (let j = 0; j < item.length; j++) {
            for (let k = 0; k < compare.length; k++) {
                if (item[j] === compare[k]) {
                    count += 1;
                    break;
                }
            }
        }
        if(count === compare.length && item.length === compare.length) answer += 1;
        else if(count === compare.length - 1 && item.length + 1 === compare.length) answer += 1;
        else if(count === compare.length + 1 && item.length - 1 === compare.length) answer += 1;
    }
    return answer;
}