const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input.shift();
input = input.map((item) => item.trim());
console.log(solution(input));

// 메모리 부족으로 JS로 해결 못하는문제
function solution(arr) {
    const mySet = new Set();
    let result = [];
    let answer = '';
    for(let x of arr) {
        // 인자를 명렁어랑 값으로 나눠줌
        const item = x.split(' ');
        // add면 set에 인자추가
        if(item[0] === 'add') mySet.add(item[1]);
        // check면 has를 사용해서 인자확인
        else if(item[0] === 'check') {
            if(mySet.has(item[1])) result.push(1);
            else result.push(0);
        // remove면 item 삭제
        } else if(item[0] === 'remove') {
            mySet.delete(item[1]);
        // toggle이면 인자가 있을 경우 삭제 아니면 추가
        } else if(item[0] === 'toggle') {
            if(mySet.has(item[1])) mySet.delete(item[1]);
            else mySet.add(item[1]);
        // add이면 1~20인자 추가
        } else if(item[0] === 'all') {
            const allItem = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20'];
            for(let value of allItem) {
                mySet.add(value);
            }
        //empty이면 set 공집합 만들기
        } else if(item[0] === 'empty') mySet.clear();
    }
    // 출력 연산
    for(let x of result) {
        answer += x + '\n';
    }
    return answer.trim();
} 