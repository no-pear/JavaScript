const myPromise = require('./myPromise');
const { values } = require('lodash');

// let mypromise = new myPromise((res, rej) => {
    // setTimeout(() => {
    //     res('successful~~~~~');
    // }, 2000);

    // setTimeout(() => {
    //     rej('failed');
    // }, 2000);

    // throw new Error('executor error')
    // res('successful');
    // rej('failed');
// })

// mypromise.then()
//          .then()
//          .then(data=>{
//              console.log(data)
//          }, err=>{
//              console.log(err)
//          })

// mypromise.then((data) => {
//     console.log(data);
//     throw new Error('then error')
// }, (err) => {
//     console.log(err);
// })
// .then((data) => {
//     console.log(data);
// }, (err) => {
//     console.log(err);
// })

// mypromise.then((data) => {
//     console.log(data);
// }, (err) => {
//     console.log(err);
// })
// mypromise.then((data) => {
//     console.log(data);
// }, (err) => {
//     console.log(err);
// })
// mypromise.then((data) => {
//     console.log(data);
// }, (err) => {
//     console.log(err);
// })

// function other(){
//     return new myPromise((res, rej)=>{
//         res('other');
//     })
// }
function other2(){
    return new myPromise((res, rej)=>{
        rej('失败');
    })
}
// mypromise.then((data)=>{
//     console.log(data)
//     return 100
//     // return other()
// }, err=>{
//     console.log(err);
//     return 200
// })
// .then((data)=>{
//     console.log(data)
// })

// let p1 = mypromise.then((data)=>{
//     console.log(data)
//     return p1
// })
// p1.then((data)=>{
//     console.log(data)
// }, err=>{
//     console.log(err.message)
// })

let p1 = new myPromise((res, rej)=>{
    setTimeout(() => {
        res('p1')
    }, 2000);
})
let p2 = new myPromise((res, rej)=>{
    // res('p2 reslove')
    rej('p2 reject')
})

// p2.finally(()=>{
//     console.log('finally')
//     return p1
// }).then(data=>{
//     console.log(data);
// }, err=>{
//     console.log(err)
// }) 

p2.then(data=>{
    console.log(data);
}).catch(err=>{
    console.log(err)
})

// myPromise.all(['a', p1, 'b', p2]).then(data=>{
//     console.log(data)
// }, err=>{
//     console.log(err)
// })

// myPromise.reslove(200).then(value => console.log(value))
// myPromise.reslove(other()).then(value => console.log(value))

// myPromise.reject(new Error('reject')).then(value => console.log(value), err=>{console.log(err)})
// myPromise.reject(other2()).then(value => console.log(value), err=>{console.log(err)})
