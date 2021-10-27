const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim();

solution(input);

function solution(s) {
    // 크로아티아 문자열을 만나면 문자를 X로 바꿔주고 출력하기
    const croatia = ['c=','c-','dz=','d-','lj','nj','s=','z='];
    croatia.map((item) => {
        s = s.split(item).join('X');
    });
    console.log(s.length);
}