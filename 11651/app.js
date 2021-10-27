const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const inputArray = [];
for(let i = 1; i <= Number(input[0]); i++) {
    const inputValue = input[i].split(' ').map((item) => +item);
    inputArray.push(inputValue);
}

solution(inputArray);

function solution(arr) {
    let answer = '';
    // 2차원 좌표 정렬 index 0번값 순으로 오름차순 한뒤 index 0의 값이 같으면 index 1번 순으로 출력
    const newArr = arr.sort((a, b) => {
        if(a[1] === b[1]) {
            return a[0] - b[0];
        } else return a[1] - b[1];
    })
    for(let x of newArr) {
        answer += `${x[0].toString()} ${x[1].toString()}` + '\n';
    }
    console.log(answer);
}