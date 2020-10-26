function findMax(a) {
    var iloscLiczb = arguments.length;
    var max = arguments[0];
    
    for (var i = 0; i < iloscLiczb; i++) {
        if (arguments[i] > max) max = arguments[i];
    }

    return max;
}