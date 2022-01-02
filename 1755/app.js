const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n')[0].split(' ').map((item) => +item);

function solution(arr) {
    let answer = '';
    const num = [];
    // 숫자의 범위만큼 num에 담기
    for(let i = arr[0]; i <= arr[1]; i++) {
        num.push(i);
    }
    // 숫자를 영문으로 바꾼 배열 선언
    const word = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    const engilsh = new Map();
    // Map함수에 키와 값을 모두 선언(문자열로 해야함 스프레이드연산자와 string메소드를 사용하기 위함)
    word.forEach((item,index) => {
        engilsh.set(item, index.toString());
        engilsh.set(index.toString(), item);
    });
    // num함수를 전부다 돌면서 숫자를 영문으로 바꿈
    const newNum = num.map((item) => {
        const value = [...item.toString()];
        const result = [];
        for(let i = 0; i < value.length; i++) {
            result.push(engilsh.get(value[i]));
        }
        return result.join(' ');
    });
    // 사전순 정렬
    newNum.sort();
    // newNum의 영문으로 된 숫자를 다시 숫자로 치환
    const sortNum = newNum.map((item) => {
        const value = item.split(' ');
        const result = [];
        for(let i = 0; i < value.length; i++) {
            result.push(engilsh.get(value[i]));
        }
        return +result.join('');
    });
    // 정답 정제
    sortNum.forEach((item, index) => {
        answer += item + ' ';
        if((index + 1) % 10 === 0) answer += '\n';
    });
    return answer;
}

console.log(solution(input));