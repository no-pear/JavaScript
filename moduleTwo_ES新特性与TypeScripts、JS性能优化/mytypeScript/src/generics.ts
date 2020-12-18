export {} // 确保跟其他示例没有成员冲突


// let createNumberArr = (length: number, value: number): number[] =>{
//     const arr = Array<number>(length).fill(value);
//     return arr
// }
// const resArr = createNumberArr(3, 100);
// console.log("resArr", resArr)


let createArr = <T>(length: number, value: T): T[] =>{
    const arr = Array<T>(length).fill(value);
    return arr
}


// function createArr<T> (length: number, value: T): T[] {
//     const arr = Array<T>(length).fill(value);
//     return arr
// }

let res = createArr(5, 'hello')
console.log("res", res)
let res2 = createArr(3, 6)
console.log("res2", res2)

