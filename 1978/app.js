const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = input[1].split(' ').map((item) => +item);

console.log(solution(input));

function solution(arr) {
    // 소수가 아닌것을 찾을 빈 배열선언
    let compare = [];
    for(let i = 0; i < arr.length; i++) {
        // 1은 소수가 아니므로 1을 만나면 바로 compare에 푸쉬
        if(arr[i] === 1) compare.push(arr[i]);
        // j가 2부터 자기자신에서 1을 뺸 수중 나눠서 나머지가 없으면 소수가 아님
        for(let j = 2; j < arr[i]; j++) {
            if(arr[i] % j === 0) {
                // 값이 j로 나눠 나머지가 없는 경우가 생길경우 그 값을 compare에 푸쉬하고 해당되는 포문 종료
                compare.push(arr[i]);
                break;
            }
        }
    }
    // 원래 수의 배열 길이에서 소수가 아닌 배열 길이를 빼줌
    let answer = arr.length - compare.length;
    return answer;
} 