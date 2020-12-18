"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
        this.gender = true;
    }
    Person.prototype.say = function (msg) {
        console.log("I am " + this.name + ", " + msg);
    };
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age) {
        var _this = _super.call(this, name, age) || this;
        console.log('s---', _this, _this.gender); // Student { name: 'tom', age: 18, gender: true } true
        return _this;
    }
    return Student;
}(Person));
var Student2 = /** @class */ (function (_super) {
    __extends(Student2, _super);
    function Student2(name, age) {
        var _this = _super.call(this, name, age) || this;
        console.log('s2---', _this, _this.gender);
        return _this;
    }
    return Student2;
}(Student));
var Student3 = /** @class */ (function (_super) {
    __extends(Student3, _super);
    function Student3(name, age) {
        var _this = _super.call(this, name, age) || this;
        console.log('s3---', _this, _this.gender);
        return _this;
    }
    return Student3;
}(Student2));
var hans = new Person('hans', 19);
console.log(hans.name); // hans
// console.log(hans.age)  // 无法访问
// console.log(hans.gender) // 无法访问
// const s = new Student('tom', 18)
// const s2 = new Student2('pony', 15)
var s3 = new Student3('lily', 20);
