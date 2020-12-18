function foo() {
    var name = 'lg'
    function fn() {
        console.log(name)
    }
    return fn
}

var a = foo();
a()

