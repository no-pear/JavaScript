// 记忆函数
const _ = require('lodash')

function getArea (r) {
  console.log(r)
  return Math.PI * r * r
}

// let getAreaWithMemory = _.memoize(getArea)
// console.log(getAreaWithMemory(4))
// console.log(getAreaWithMemory(4))
// console.log(getAreaWithMemory(4))


// 模拟 memoize 方法的实现

function memoize (f) {
  let cache = {}
  return function () {
    let key = JSON.stringify(arguments)
    cache[key] = cache[key] || f.apply(f, arguments)
    return cache[key]
  }
}

// let getAreaWithMemory = memoize(getArea)
// console.log(getAreaWithMemory(4))
// console.log(getAreaWithMemory(4))
// console.log(getAreaWithMemory(4))

function fn1 (x) {
  console.log("x", x)
  return x*x;
}

function fn2 (y) {
  console.log("y", y)  
  return y*y
}

let cacheFn1 = memoize (fn1);
let cacheFn2 = memoize (fn2);

console.log("cacheFn1", cacheFn1(1))
console.log("cacheFn1", cacheFn1(1))
console.log("cacheFn2", cacheFn2(2))
console.log("cacheFn2", cacheFn2(2))
