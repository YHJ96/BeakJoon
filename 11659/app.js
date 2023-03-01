const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
input.shift();
let inputArray = [];
for (let i = 0; i < input.length; i++) {
  const inputValue = input[i].split(" ").map((item) => +item);
  inputArray.push(inputValue);
}
console.log(solution(inputArray));

function solution(arr) {
  const answer = [];
  let sum = Array(nums.length + 1).fill(0);

  for (let i = 1; i <= nums.length; i++) {
    sum[i] = sum[i - 1] + nums[i - 1];
  }

  for (let i = 0; i < arr.length; i++) {
    const [start, end] = arr[i];
    answer.push(sum[end] - sum[start - 1]);
  }
  return answer.join("\n");
}
