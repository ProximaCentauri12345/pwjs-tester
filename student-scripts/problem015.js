var Stack = {
    push: (a, b=1) => {
        for (var i = 0; i < (b - 1); i++) {
            Stack.elements.push(null);
        }
        Stack.elements.push(a);
    },
    pop: (a=1) => {
        var dlugosc = Stack.elements.length;
        for (var i = 0; i < dlugosc; i++) {
            Stack.elements.pop();
            if (i == (dlugosc - 1)) return;
        }
    },
    elements: [],
}