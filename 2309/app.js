const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = input.map((item) => +item);

console.log(solution(input));

function solution(arr) {
    let result = arr;
    // 난쟁이들의 총 합을 구한다.
    let sum = arr.reduce((a, b) => a + b, 0);
    for(let i = 0; i < arr.length - 1; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            // 2개를 뽑는 모든경우의 수를 돌면서 난쟁이의 합에서 2개를 뺴서 100이 나오는경우가 난쟁이가 아니다.
            if((sum - (arr[i] + arr[j])) === 100) {
                // 배열에서 삭제한다.
                arr.splice(i, 1);
                arr.splice(j - 1 ,1);
            }
        }
    }
    // 오름차순 정리
    result = result.sort((a,b) => a - b);
    let answer = '';
    for(let x of result) {
        answer += x.toString() + '\n';
    }
    return answer;
}