// function* main() {

//     try {
//         const res = yield 'foo';
//         console.log(res)
//     }catch (e) {
//         console.log(e)
//     }
// }

// let g = main();
// // console.log(g)

// const result = g.next();

// // g.next('bar')

// g.throw(new Error('Generator error'))

let fn = () => {
    return new Promise((res, rej) => {
        res('ok')
    })
}

// fn().then((data)=>{
//     console.log(data)
// })

function* generator() {
    const res = yield fn()
    console.log("function*generator -> res", res)
}

const g = generator();

const result = g.next();
console.log(result)
result.value.then(data => {
    // console.log("data", data)
    g.next(data)

})