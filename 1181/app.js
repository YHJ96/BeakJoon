const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const inputArray = [];
for(let i = 1; i <= Number(input[0]); i++) {
    inputArray.push(input[i].trim());
}

function solution(arr) {
    const newArr = arr.sort((a, b) => {
        if(a.length === b.length) {
            // 문자열 길이가 앞에 인자와 뒤의 인자가 같으면 사전순으로 출력
            return a.localeCompare(b);
            // 문자열 길이가 짧은 순으로 정렬
        } else return a.length - b.length;
    });
    // 단어의 중복체크
    const filterArr = newArr.filter((item, index) => newArr.indexOf(item) === index);
    let answer = '';
    for(let x of filterArr) {
        answer += x + '\n';
    }
    return answer;
}

console.log(solution(inputArray)); 