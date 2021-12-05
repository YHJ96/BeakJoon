const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input.forEach((item, index) => {
    input[index] = item.trim();
});

function solution(arr) {
    let answer = '';
    // 사전순으로 정렬
    arr.sort();
    const treeHash = new Map();
    const total = arr.length;
    for(let x of arr) {
        // 나무 이름과 개수를 저장
        if(!treeHash.has(x)) treeHash.set(x, 1);
        else treeHash.set(x, treeHash.get(x)+1);
    }
    // 해쉬테이블을 순회
    treeHash.forEach((item, index) => {
        // 백분율 구하기
        const percent = treeHash.get(index) / total * 100;
        // 나무이름과 소수점 4번쨰 까지 정제
        answer += `${index} ${percent.toFixed(4)}` + '\n';
    });
    return answer.trim();
}

console.log(solution(input));