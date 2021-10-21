const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = input[0];

function solution(s) {
    // 알파벳이 몇개 사용되었는지 확인하기 위해서 비교값 생성
    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    s = s.toLowerCase();
    s = [...s];
    // 26개 인자 0으로 초기화
    let index = Array(26).fill(0);
    for(let i = 0; i < s.length; i++) {
        for(let j = 0; j <alphabet.length; j++) {
            // 해당 알파벳을 찾으면 1 증가
            if(s[i] === alphabet[j]) {
                index[j] += 1;
            }
        }
    }
    const max = Math.max(...index);
    // max와 같은 인자가 있는지 비교
    const compare = index.filter((item) => max === item);
    // compare의 길이가 1이 아닐경우 가장 많이 사용된 알파벳이 여러 개 존재
    if(compare.length !== 1) return '?';
    // index 찾기
    index = index.indexOf(max);
    return alphabet[index].toUpperCase();
}

console.log(solution(input)); 