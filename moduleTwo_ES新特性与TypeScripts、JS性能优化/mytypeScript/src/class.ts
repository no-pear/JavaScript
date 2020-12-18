export {}

class Person {
    public name: string; // ='init name'  // 默认public
    private age: number; // pvivate 私有
    protected gender: boolean; // protected 受保护的

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
        this.gender = true;
    }

    say (msg: string): void {
        console.log(`I am ${this.name}, ${msg}`)
    }
}

class Student extends Person {
    constructor (name: string, age: number) {
        super(name, age);
        console.log('s---',this, this.gender) // Student { name: 'tom', age: 18, gender: true } true
    }
}

class Student2 extends Student {
    constructor (name: string, age: number) {
        super(name, age);
        console.log('s2---',this, this.gender) 
    }
}

class Student3 extends Student2 {
    constructor (name: string, age: number) {
        super(name, age);
        console.log('s3---',this, this.gender) 
    }
}

const hans = new Person('hans', 19)
console.log(hans.name); // hans
// console.log(hans.age)  // 无法访问
// console.log(hans.gender) // 无法访问

// const s = new Student('tom', 18)
// const s2 = new Student2('pony', 15)
const s3 = new Student3('lily', 20)
