const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

// 모든 가능성의 수를 구하는 함수 생성
function totalSum(n) {
    let result = [];
    const add = [1,2,3];
    function DFS(depth, sum, str) {
        // 숫자가 크면 return
        if(sum > n) return;
        // 해당 숫자에 도달하면 result에 push
        if(sum === n) result.push(str);
        // 백트래킹 시작
        else for(let i = 0; i < add.length; i++) DFS(depth+1, sum + add[i], str + add[i]);
    }
    DFS(0, 0, '');
    return result;
}

function solution(arr) {
    const [n, target] = arr;
    // n으로 가능한 모든 경우의 수의 방법을 사전순으로 오름차순 정렬
    const num = totalSum(n).sort((a,b) => a.localeCompare(b));
    let answer = "";
    // 예외처리
    if (num.length < target) return -1;
    // 정답 정제
    for(let char of num[target - 1]) answer += char + '+';
    return answer.slice(0, -1);
}

console.log(solution(input));