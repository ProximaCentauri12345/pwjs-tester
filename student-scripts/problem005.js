function strangeSum(a, b) {
    var wynik = null;

    if (Number.isInteger(a) && Number.isInteger(b)) {
        if (a == b) wynik = (a + b) * 3;
        else wynik = a + b;
    }

    return wynik;
}