"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 从6开始
var PostStatus2;
(function (PostStatus2) {
    PostStatus2[PostStatus2["Draft"] = 6] = "Draft";
    PostStatus2[PostStatus2["Unpublished"] = 7] = "Unpublished";
    PostStatus2[PostStatus2["Published"] = 8] = "Published";
})(PostStatus2 || (PostStatus2 = {}));
var post = {
    title: 'hello, ts',
    content: 'ts is a typed superset of js',
    status: 0 /* Draft */
};
// 隐式类型推断
var a = 18;
// a = 'string'
