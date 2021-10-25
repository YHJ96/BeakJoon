const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const inputArray = [];
const block = +input[0].split(' ')[2];
for (let i = 1; i < input.length; i++) {
    const inputValue = input[i].split(' ').map((item) => +item);
    inputArray.push(inputValue);
}

function solution(block, arr) {
    let answer = [];
    let min = Number.MAX_SAFE_INTEGER;
    // 블록이 0 부터 256까지 이므로 완전탐색 시작
    for(let i = 0; i <= 256; i++) {
        // 카운트 초기화
        let count = 0;
        // 블록 초기화
        let n = block;
        for(let y = 0; y < arr.length; y++) {
            // 땅파기 먼저해서 인벤토리에 블럭넣기
            for(let x = 0; x < arr[y].length; x++) {
                if(arr[y][x] >= i) {
                    const result = arr[y][x] - i;
                    count += (2 * result);
                    n += result;
                }
            }
            // 땅 매꾸기
            for(let x = 0; x < arr[y].length; x++) {
                if(arr[y][x] <= i) {
                    const result = i - arr[y][x];
                    count += result;
                    n -= result;
                }
            }
        }
        // 인벤토리에 블록이 없다면 continue
        if(n < 0) continue;
        // min의 중복값이 있을수 있으므로 answer에 전부 push
        if(min >= count) {
            min = count;
            answer.push([count, i]);
        }
    }
    // a는 최소 b는 최대 값 출력하기 위한 조건
    answer = answer.filter((item) => item[0] === min);
    answer.sort((a,b) => b[1] - a[1]);
    return answer[0].join(' ');
}

console.log(solution(block, inputArray));

// 접근방식을 잘못함 i에서 높이를 빼면 count 구할수 있음