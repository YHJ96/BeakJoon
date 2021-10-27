const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const n = input[0].split(' ').map((item) => +item);
const file = [];
const search = [];
for(let i = 1; i < input.length; i++) {
    if(i <= n[0]) file.push(input[i].trim());
    else search.push(input[i].trim());
}

console.log(solution(file, search));

function solution(file, search) {
    let answer = '';
    // 키와 값으로 나누기 위해서 오브젝트 생성
    const myMap = new Map();
    for(let x of file) {
        // 배열을 공백으로 나눈뒤 키를 사이트 주소 값을 비밀번호로 제작
        const item = x.split(' ');
        myMap.set(item[0], item[1]);
    }
    for(let x of search) {
        // 객체에 있는 값을 가져오기
        answer += myMap.get(x) + '\n';
    }
    return answer.trim();
} 