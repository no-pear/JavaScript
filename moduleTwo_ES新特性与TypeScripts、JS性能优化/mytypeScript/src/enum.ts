export {}

// 枚举
// enum PostStatus {
//     Draft = 0,
//     Unpublished = 1,
//     Published = 2,
// }

// 默认从0开始
const enum PostStatus {
    Draft, // 0
    Unpublished, // 1
    Published, // 2
}

// 从6开始
enum PostStatus2 {
    Draft = 6,
    Unpublished, // 7
    Published,  // 8
}

const post = {
    title: 'hello, ts',
    content: 'ts is a typed superset of js',
    status: PostStatus.Draft
}

// 隐式类型推断
let a = 18;
// a = 'string'