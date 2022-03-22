const readLine = require("readline");
const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});
const input = [];
rl.on('line', (line) => {
    const item = line.trim();
    input.push(item);
}).on('close', () => {
    function solution(s) {
        // 커플석인 "LL" 부분을 S로 바꿔준다음 양 끝자리도 컵홀더 공간이 있으므로 + 1
        let answer = s.split("LL").join("S").length + 1;
        // 컵 홀더 공간이 사람보다 많은 경우 예외처리
        if(s.length < answer) return s.length;
        return answer;
    }
    console.log(solution(input[1]));
    process.exit();
})