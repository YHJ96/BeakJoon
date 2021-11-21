const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const inputArray = [];
for(let i = 0; i < input.length - 1; i++) {
    const item = input[i].split(' ').map((item) => +item);
    item.shift();
    inputArray.push(item);
}

// 로또 출력 만들기
function findLotto(arr) {
    let answer = '';
    // arr의 길이에서 6개의 공을 뽑는 조합
    let tmp = Array.from({length : 6}, () => 0);
    function DFS(L, num) {
        // 6개를 다 뽑으면 정지
        if(L === 6) {
            const value = tmp.slice().join(' ');
            answer += value + '\n';
        } else {
            for(let i = num; i < arr.length; i++) {
                // 순회시작
                tmp[L] = arr[i];
                DFS(L+1, i+1);
            }
        }
    }
    // DFS 실행
    DFS(0, 0);
    return answer;
}

function solution(arr) {
    let answer = '';
    // 배열의 길이만큼 반복
    for(let i = 0; i < arr.length; i++) {
        const item = findLotto(arr[i]);
        // 출력값 정제
        answer += item + '\n'; 
    }
    return answer.trim();
}

console.log(solution(inputArray));