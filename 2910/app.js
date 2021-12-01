const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = input[1].split(' ').map((item) => +item);

function solution(num) {
    const numHash = new Map();
    for(let x of num) {
        if(!numHash.get(x)) numHash.set(x, 1);
        else numHash.set(x, numHash.get(x) + 1);
    }
    numHash.forEach((item, index) => {
        const order = num.indexOf(index);
        numHash.set(index, [numHash.get(index), order]);
    });
    num.sort((a,b) => {
        const aCnt = numHash.get(a)[0];
        const bCnt = numHash.get(b)[0];
        if(aCnt !== bCnt) return bCnt - aCnt;
        else {
            const aIndex = numHash.get(a)[1];
            const bIndex = numHash.get(b)[1];
            return aIndex - bIndex;
        }
    });
    const answer = num.join(' ');
    return answer;
}

console.log(solution(input));