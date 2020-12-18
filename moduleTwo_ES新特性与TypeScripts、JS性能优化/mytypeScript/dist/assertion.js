"use strict";
var nums = [1, 2, 3, 4];
var res = nums.find(function (item) { return item > 0; });
console.log("res", res);
var num1 = res; // 1
var num2 = res; // 1   // JSX 下不能使用
console.log(num1, num2);
