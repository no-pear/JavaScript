let arr = [1,2,3,4,4,1]
let newArr = arr.reduce((pre,cur)=>{
    // console.log(pre, cur)
    if(!pre.includes(cur)){
      // return pre.concat(cur)
      return pre.push(cur)
    }else{
      return pre
    }
},[])
console.log(newArr);// [1, 2, 3, 4]