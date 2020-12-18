export {}

abstract class Animal {
    abstract run (distance: number): void
}

class Dog extends Animal {
    run(distance: number): void {
        // throw new Error("Method not implemented.");
        console.log('四脚爬行', distance)
    }

}

const d = new Dog();
d.run(100)