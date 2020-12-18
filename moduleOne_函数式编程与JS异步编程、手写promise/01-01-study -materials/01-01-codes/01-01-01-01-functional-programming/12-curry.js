// 模拟实现 lodash 中的 curry 方法

function getSum (a, b, c) {
  return a + b + c
}

const curried = curry(getSum)

function curry (func) {
  console.log(arguments.length)
  return function curriedFn(...args) {
    console.log(...args)
    // 判断实参和形参的个数
    if (args.length < func.length) {
      return function () {
        return curriedFn(...args.concat(Array.from(arguments)))
      }
    }
    return func(...args)
  }
}

// console.log(curried(3))

// console.log(curried(1, 2, 3))
// console.log(curried(1)(2, 3))
// console.log(curried(1, 2)(3))
