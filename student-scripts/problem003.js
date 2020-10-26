function isLeapYear(a) {
    wynik = Boolean(false);

    if (typeof a == "number") {
        if (((a % 4 === 0) && (a % 100 !== 0)) || (a % 400 === 0)) {
            wynik = true;
            return wynik;
        }
    }

    return wynik;
}