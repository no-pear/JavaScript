class mayBe {
    constructor(value) {
        this.value = value;
    }

    static create(value){
        return new mayBe(value);
    }

    isNothing() {
        return this.value === null || this.value === undefined;
    }

    map(fn) {
        return this.isNothing() ? mayBe.create(null) : mayBe.create(fn(this.value))
    }
}

//
// let r = mayBe.create('hello world')
//             .map(x => x.toUpperCase());

let r = mayBe.create(null)
            .map(x => x.toUpperCase());

console.log(r)