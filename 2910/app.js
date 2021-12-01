const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = input[1].split(' ').map((item) => +item);

function solution(num) {
    const numHash = new Map();
    for(let x of num) {
        // Map함수에 키값이 없으면 1로 추가해주고 있으면 1를 더해준다.
        if(!numHash.get(x)) numHash.set(x, 1);
        else numHash.set(x, numHash.get(x) + 1);
    }
    numHash.forEach((item, index) => {
        // Map함수의 인덱스를 따라서 배열에서 나타난 순서를 추가해준다.
        const order = num.indexOf(index);
        numHash.set(index, [numHash.get(index), order]);
    });
    // 정렬시작
    num.sort((a,b) => {
        // Map에 있는 키값으로 빈도수를 가져와서 정렬한다.
        const aCnt = numHash.get(a)[0];
        const bCnt = numHash.get(b)[0];
        if(aCnt !== bCnt) return bCnt - aCnt;
        // 빈도수의 값이 같으면 하는 예외처리
        else {
            // 먼저나온 순서대로 정렬한다.
            const aIndex = numHash.get(a)[1];
            const bIndex = numHash.get(b)[1];
            return aIndex - bIndex;
        }
    });
    const answer = num.join(' ');
    return answer;
}

console.log(solution(input));