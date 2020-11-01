function compose(...arguments) {
    var func = arguments.reverse();
    return function (a) {
        for (var i=0; i < func.length; i++) {
            a = func[i](a);
        }
        return a;
    }
}