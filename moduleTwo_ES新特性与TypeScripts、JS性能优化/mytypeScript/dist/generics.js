"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// let createNumberArr = (length: number, value: number): number[] =>{
//     const arr = Array<number>(length).fill(value);
//     return arr
// }
// const resArr = createNumberArr(3, 100);
// console.log("resArr", resArr)
var createArr = function (length, value) {
    var arr = Array(length).fill(value);
    return arr;
};
// function createArr<T> (length: number, value: T): T[] {
//     const arr = Array<T>(length).fill(value);
//     return arr
// }
var res = createArr(5, 'hello');
console.log("res", res);
var res2 = createArr(3, 6);
console.log("res2", res2);
