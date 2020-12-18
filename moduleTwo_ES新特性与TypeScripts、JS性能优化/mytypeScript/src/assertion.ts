const nums = [1, 2, 3, 4];

const res  = nums.find(item => item>0)
console.log("res", res)

const num1 = res as number // 1
const num2 = <number>res // 1   // JSX 下不能使用

console.log(num1, num2)