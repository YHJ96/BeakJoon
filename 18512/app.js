const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const inputArray = [];
for(let i = 1; i < input.length; i++) {
    const inputValue = input[i].trim().split(" ");
    inputArray.push(inputValue);
}

// 단어가 애너그램인지 확인하는 함수
function checkWord(arr) {
    let answer = true;
    const [a, b] = arr;
    // 각각의 단어와 개수를 확인하기 위한 Map함수
    const aMap = new Map();
    const bMap = new Map();
    for(let i = 0; i < a.length; i++) {
        // Map 함수에 인자가 없으면 1로 초기화 있으면 더하기 1
        if(!aMap.has(a[i])) aMap.set(a[i], 1);
        else aMap.set(a[i], aMap.get(a[i]) + 1);
    }
    for(let i = 0; i < b.length; i++) {
        // Map 함수에 인자가 없으면 1로 초기화 있으면 더하기 1
        if(!bMap.has(b[i])) bMap.set(b[i], 1);
        else bMap.set(b[i], bMap.get(b[i]) + 1);
    }
    // 글자의 개수가 다르면 return
    if(aMap.size !== bMap.size) return false;
    else {
        const aKey = [...aMap.keys()];
        const bkey = [...bMap.keys()];
        // 각각의 키값으로 키값이 같은지 확인
        aKey.forEach((item) => {
            if(bkey.indexOf(item) === -1) return false;
        });
        // 각각의 키값으로 개수가 맞는지 확인
        bMap.forEach((item, index) => {
            if(aMap.get(index) !== item) answer = false;
        });
    }
    return answer;
}

function solution(arr) {
    let answer = [];
    for(let x of arr) {
        const ck = checkWord(x);
        // 애너그램이 맞는지 아닌지 확인
        if(ck) answer.push(`${x[0]} & ${x[1]} are anagrams.`);
        else answer.push(`${x[0]} & ${x[1]} are NOT anagrams.`);
    }
    // 정답 정제
    return answer.join("\n");
}

console.log(solution(inputArray));