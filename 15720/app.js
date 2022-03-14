const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map((item) => {
    const value = item.split(" ").map((item) => +item);
    return value;
});
input.shift();

// 내림차순 정렬을 해주는 함수선언
function sortPrice(arr) {
    return arr.sort((a,b) => b-a);
}

// 할인가격과 할인가격이 아닐 때의 가격을 구하는 함수선언
function totalPrice(arr, count) {
    let discount = 0;
    let price = 0;
    arr.forEach((item, index) => {
        if(index <= count - 1) {
            discount += item;
            price += (item * 0.9);
        } else {
            discount += item;
            price += item;
        }
    });
    return {discount, price};
}

function solution(arr) {
    // 초기화 
    let answer = [0, 0];
    const [burger, side, drink] = arr;
    // 세트의 개수를 구하기 위해서 최소값을 구하기
    const count = Math.min(burger.length, side.length, drink.length);
    // 모든 배열 내림차순 정렬
    for(let x of arr) sortPrice(x);
    // 모든 배열 각각의 가격을 해당되는 값에 answer에 push
    for(let x of arr) {
        const item = totalPrice(x, count);
        answer[0] += item.discount;
        answer[1] += item.price;
    }
    // 정답 정제
    return answer.join("\n");
}

console.log(solution(input));