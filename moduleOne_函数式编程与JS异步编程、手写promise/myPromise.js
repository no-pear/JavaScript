const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';
class myPromise {
    constructor(executor) {
        try {
            executor(this.res, this.rej)
        } catch (error) {
            this.rej(error)
        }
    }
    //状态
    status = PENDING;
    // 成功的返回值
    data = '';
    // 失败的原因
    err = '';
    // // 成功回调
    // sucCallBack = undefined;
    // // 失败回调
    // faiCallBack = undefined;
    // 成功回调
    sucCallBack = [];
    // 失败回调
    faiCallBack = [];


    res = (data) => {
        // 判断是否是pending状态才可更改状态
        if (this.status !== PENDING) return;
        // 更改状态
        this.status = FULFILLED;
        // 保持成功的返回值
        this.data = data;
        // 判断成功回调是否存在，如果存在调用
        // this.sucCallBack && this.sucCallBack(this.data);
        // while (this.sucCallBack.length) this.sucCallBack.shift()(this.data);
        while (this.sucCallBack.length) this.sucCallBack.shift()();
    }
    rej = (err) => {
        if (this.status !== PENDING) return;
        this.status = REJECTED;
        // 返回失败的原因
        this.err = err;
        // 判断成功回调是否存在，如果存在调用
        // this.faiCallBack && this.faiCallBack(this.err);
        // while (this.faiCallBack.length) this.faiCallBack.shift()(this.err);
        while (this.faiCallBack.length) this.faiCallBack.shift()();


    }

    reslovePromise(mypromise2, value, res, rej) {
        if (mypromise2 === value) {
            // 循环调用本身的promise
            return rej(new TypeError('Chaining cycle detected for promise'))
        }
        if (value instanceof myPromise) {
            // promise对象
            // value.then(data=>res(data), err=> rej(err));
            value.then(res, rej)
        } else {
            // 普通对象
            res(value);
        }
    }

    then(sucCallBack, faiCallBack) {
        sucCallBack = sucCallBack ? sucCallBack : data=>data;
        faiCallBack = faiCallBack ? faiCallBack : err => {throw err}
        let mypromise2 = new myPromise((res, rej) => {
            // 判断状态
            if (this.status === FULFILLED) {
                // 成功
                setTimeout(() => {
                    try {
                        let value = sucCallBack(this.data);
                        // 判断 value 的值是普通值还是 promise 对象
                        // 普通值 ---> resolve(value)
                        // promise ---> 查看 promise对象的返回结果
                        // 再根据 promise 对象的返回结果 决定调用 resolve or reject 
                        // res(value)
                        this.reslovePromise(mypromise2, value, res, rej);

                    } catch (error) {
                        rej(error)
                    }
                }, 0)
            } else if (this.status === REJECTED) {
                // 失败
                setTimeout(() => {
                    try {
                        let value = faiCallBack(this.err);
                        // 判断 value 的值是普通值还是 promise 对象
                        // 普通值 ---> resolve(value)
                        // promise ---> 查看 promise对象的返回结果
                        // 再根据 promise 对象的返回结果 决定调用 resolve or reject 
                        // res(value)
                        this.reslovePromise(mypromise2, value, res, rej);
                    } catch (error) {
                        rej(error)
                    }
                }, 0)
            } else {
                // 等待
                // 将成功和失败的回调保存下来
                // this.sucCallBack = sucCallBack;
                // this.faiCallBack = faiCallBack;
                // this.sucCallBack.push(sucCallBack);

                // this.faiCallBack.push(faiCallBack);

                this.sucCallBack.push(()=>{
                    setTimeout(() => {
                        try {
                            let value = sucCallBack(this.data);
                            // 判断 value 的值是普通值还是 promise 对象
                            // 普通值 ---> resolve(value)
                            // promise ---> 查看 promise对象的返回结果
                            // 再根据 promise 对象的返回结果 决定调用 resolve or reject 
                            // res(value)
                            this.reslovePromise(mypromise2, value, res, rej);
    
                        } catch (error) {
                            rej(error)
                        }
                    }, 0)
                })

                this.faiCallBack.push(()=>{
                    setTimeout(() => {
                        try {
                            let value = faiCallBack(this.err);
                            // 判断 value 的值是普通值还是 promise 对象
                            // 普通值 ---> resolve(value)
                            // promise ---> 查看 promise对象的返回结果
                            // 再根据 promise 对象的返回结果 决定调用 resolve or reject 
                            // res(value)
                            this.reslovePromise(mypromise2, value, res, rej);
                        } catch (error) {
                            rej(error)
                        }
                    }, 0)
                })
            }
        })
        return mypromise2;
    }

    catch(faiCallBack) {
        return this.then(undefined, faiCallBack);
    }

    // finally 无论promise最终状态是成功还是失败都会执行一次
    // finally 可以链式调用，拿到promise对象最终的返回值
    finally (callback) {
        return this.then(data=>{
            // callback();
            // return data
            return myPromise.reslove(callback()).then(()=>data);
        }, err=>{
            // callback();
            // return err;
            return myPromise.reject(callback()).then((err)=>{ throw err})
        })
    }
    
    static all (array) {
        let result = [];
        let flag = 0
        return new myPromise( (res, rej) =>{
            let addData = (item, index)=>{
                result[index] = item;
                flag++;
                // 避免异步打印空值
                if(array.length === flag) {
                    res(result);
                }
            }
            
            array.forEach((item, index)=>{
                if (item instanceof myPromise) {
                    // promise对象
                    item.then(data => addData(data, index), err => rej(err));
                }else{
                    // 普通值
                    addData(item, index)
                }
            });
        })

    }

    static reslove (value) {
        // console.log("myPromise -> reslove -> value instanceof myPromise", value instanceof myPromise)
        // promise 对象
        if(value instanceof myPromise) return value;
        // return new myPromise((res, rej)=>{
        //     res(value)
        // })
        // 普通值
        return new myPromise(res => res(value))
    }

    static reject (value) {
        if(value instanceof myPromise) return value;
        return new myPromise((res, rej) => rej(value))
    }
}

// 抛出
// module.exports = myPromise;

var p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('p1')
    }, 2000)
})

myPromise.res(p1).then(value => {
    console.log(value) //Promise { <pending> },为什么不是‘p1’？
})