const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const input = [];
rl.on('line', (line) => {
    const item = line.trim().split(' ').map((item) => +item);
    input.push(item);
}).on('close', () => {
    function solution(arr) {
        let answer = 0;
        // 고칠 범위 설정 무조건 처음에 한번은 고쳐야 함으로 0으로 설정
        let fix = 0;
        const tape = arr[0][1];
        const section = arr[1];
        // 구역을 오름차순 정렬
        section.sort((a,b) => a-b);
        for(let i = 0; i < section.length; i++) {
            // 만약 고칠 범위가 구역의 길이보다 크다면
            if(fix < section[i]) {
                // answer + 1
                answer += 1;
                // 구역의 길이와 테이프 길이를 더해준다 양쪽에 0.5씩 여유가 있어야 함으로 -1
                fix = section[i] + tape - 1;
            }
        }
        return answer;
    }
    console.log(solution(input));
    process.exit();
});