const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
const king = input[0].split(' ')[0];
const stone = input[0].split(' ')[1];
const steps = [];
for(let i = 1; i < input.length; i++) {
    steps.push(input[i].trim());
}

function solution(king, stone, steps) {
    let answer = '';
    // 영어로 되어있는 판을 위해서 index 번호로 초기화
    const compare = ['A','B','C','D','E','F','G','H'];
    // 8방향의 가지의 수
    const step = {
        T : [1,0],
        RT : [1,1],
        R : [0,1],
        RB: [-1,1],
        B : [-1,0],
        LB : [-1,-1],
        L : [0,-1],
        LT : [1,-1]
    };
    // king [Y][X]를 (0,0) 부터 시작하게 설정
    let kingY = parseInt(king[1] - 1);
    let kingX = compare.indexOf(king[0]);
    // stone [Y][X]를 (0,0) 부터 시작하게 설정
    let stoneY = parseInt(stone[1] - 1);
    let stoneX = compare.indexOf(stone[0]);
    for(let i = 0; i < steps.length; i++) {
        // 스텝별로 이동시작
        const ny = kingY + step[steps[i]][0];
        const nx = kingX + step[steps[i]][1];
        // 체스판을 king이 벗어나면 다음 스텝 진행
        if(ny < 0 || nx < 0 || ny > 7 || nx > 7) continue;
        // king이 돌을 만났을 경우 예외처리 진행
        if(ny === stoneY && nx === stoneX) {
            // 돌을 king이랑 같은 방향으로 스텝 진행
            const sy = stoneY + step[steps[i]][0];
            const sx = stoneX + step[steps[i]][1];
            // 돌이 체스판을 벗어날 경우 다음 스텝 진행
            if(sy < 0 || sx < 0 || sy > 7 || sx > 7) continue;
            // 돌에 새로운 좌표를 저장
            stoneY = sy;
            stoneX = sx;
        }
        // 조건에 걸리지 않았을 경우 king에 새로운 좌표를 저장
        kingY = ny;
        kingX = nx;
    }
    // 출력방식 정제 A의 시작을 0으로 하였고 정답폼에서는 1부터 시작 함으로 Y축에 1 더하기
    answer += compare[kingX] + (kingY + 1) + '\n';
    answer += compare[stoneX] + (stoneY + 1);
    return answer;
}

console.log(solution(king, stone, steps));