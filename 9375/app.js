const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input.shift();
let count = -1;
const clothes = [];
for(let x of input) {
    const item = x.trim();
    if(!isNaN(+item)) {
        count++;
        clothes[count] = []; 
    } else {
        clothes[count].push(item);
    }
}

// 옷을 입을수 있는 경우의 수를 추출하는 함수설정
function checkClothes(arr) {
    // 곱을 하기 위해서 1로 초기화
    let answer = 1;
    // Map함수 생성
    let clothesHash = new Map();
    for(let x of arr) {
        // 종류 정제
        const tag = x.split(' ')[1];
        // 종류가 Map함수에 키로 있으면 1 증가 없으면 1을 넣고 생성
        if(!clothesHash.has(tag)) clothesHash.set(tag, 1);
        else clothesHash.set(tag, clothesHash.get(tag) + 1);
    }
    // 경우의 수 구하기
    clothesHash.forEach((item) => {
        // 옷을 안입은 경우가 있기 때문에 + 1 하고 곱셈공식
        answer *= item + 1;
    });
    // 옷을 모두 안입은 경우 빼주기
    return answer - 1;
}

function solution(clothes) {
    let answer = '';
    // 정답 정제
    for(let x of clothes) {
        answer += checkClothes(x) + '\n';
    }
    return answer.trim();
}

console.log(solution(clothes));