// let obj = {name: 'hans'};
// Object.freeze(obj);
// console.log(obj.configurable)

//Proxy
// const person = {
//     name: 'hanx',
//     age: 18
// }

// const personProxy = new Proxy(person, {
//     get(target, property) {
//         // console.log("get -> property", property)
//         // console.log("get -> target", target)
//         return property in target ? target[property] : 'default'
//     },
//     set(target, property, value) {
//         if(property === 'age'){
//             if(!Number.isInteger(value)){
//                 throw new TypeError (`${age} is not an int`)
//             }
//         }
//         target[property] = value;
//     }
// })

// personProxy.name = 'xc';
// // personProxy.age = '20';
// personProxy.age = 20;
// console.log(personProxy.name)
// console.log(personProxy.age)

//Set
// const s = new Set();
// s.add(1).add(2).add(3).add(2);
// console.log(s)
// console.log(...s)
// for(let i of s){
//     console.log(i)
// }

//Map
// const m = new Map();
// const tom = {name:'tom'};
// m.set(tom, 90);
// m.set('a','1')
// console.log(m); //Map{{name:'tom'}=>90}

// Symbol
// const s = Symbol();
// console.log(typeof s)
// console.log(
//     // Symbol() === Symbol()    
//     Symbol('foo') === Symbol('foo')
// )

// const s1 = Symbol.for('foo');
// const s2 = Symbol.for('foo');
// console.log(s1, s2);
// console.log(s1 === s2)

// for...of
// const arr = [1,2,3,4]
// for(const item of arr){
//     console.log(item)
//     if(item > 2 ){
//         break
//     }
// }


// let obj = {name:'hans', age:18}

// for(const i of obj){
//     console.log(obj)
// }

console.log(2 ** 10)