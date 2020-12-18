// function red() {
//     console.log('red');
// }

// function green() {
//     console.log('green');
// }

// function yellow() {
//     console.log('yellow');
// }

// var light = function(timmer, cb){
// 	return new Promise(function(resolve, reject) {
// 		setTimeout(function() {
// 			cb();
// 			resolve();
// 		}, timmer);
// 	});
// };

// var step = function() {
// 	Promise.resolve().then(function(){
// 		return light(3000, red);
// 	}).then(function(){
// 		return light(2000, green);
// 	}).then(function(){
// 		return light(1000, yellow);
// 	}).then(function(){
// 		step();
// 	});
// }



// step();


// var User = {
//     count:1,
//     action:{
//     getCount:function () {
//         return this.count
//         }
//     }
// }
// var getCount = User.action.getCount;
//    setTimeout(() => {
//    console.log("result 1",User.action.getCount())
// })
// console.log("result 2",getCount())

// console.log(a)
// var a = '1'


// let a = f();
// const b = 2;
// function f() { return b; }

// (function(a, b = a) {
//     a === 1;
//     b === 1;
// }(1, undefined));

// (function(a = b, b) {}(undefined, 1));

// 'AAAA' 过3s 'CCCC' 'IIII' 'EEEE' 'HHHH' 'BBBB' 'DDDD'
console.log("AAAA");
setTimeout(() => console.log("BBBB"), 1000);
const start = new Date();
while (new Date() - start < 3000) {}
console.log("CCCC");
setTimeout(() => console.log("DDDD"), 0);
new Promise((resolve, reject) => {
        console.log("EEEE");
        foo.bar(100);
    })
    .then(() => console.log("FFFF"))
    .then(() => console.log("GGGG"))
    .catch(() => console.log("HHHH"));
console.log("IIII");
