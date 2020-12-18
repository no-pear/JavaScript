export {}

interface Post {
    title: string,  // 这里结束符用',' ';'都可以
    content: string;
    // subtitle?: string, // 可选
    readonly summary: string // 只读
    [prop: string]: string // 动态
}

const hello: Post = {
    title: 'hello, ts',   // 这里必须是','
    content: 'sdfasfsaf',
    summary: 'js',
}

// hello.summary = 'other' // 不可修改
hello.a = 'value1'
hello.b = 'value2'
console.log(hello) 
// {
//     title: 'hello, ts',
//     content: 'sdfasfsaf',
//     summary: 'js',
//     a: 'value1',
//     b: 'value2'
//   }