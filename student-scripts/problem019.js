function carry(a) {
    return function func() {
        Array.from(arguments).pop();
        return func();
    }
}