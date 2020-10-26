function divisible(a) {
    var wynik = new Boolean(false);
    var iloscLiczb = arguments.length;

    for (var i = 0; i < iloscLiczb; i++) {
        if (arguments[0] % arguments[i] === 0) {
            wynik = true;
        }
        else {
            return false;
        }
    }
    return wynik;
}