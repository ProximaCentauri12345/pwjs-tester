function getTotalNumberOfNewYaersEveSundays(a, b) {
    var wynik = 0;

    if ((typeof a == "number") && (typeof b == "number")) {
        for (a; a <= b; a++) {
            if (new Date(a, 0, 1).getDay() === 0) {
                    wynik++;
            }
        }
        return wynik;
    }

    return wynik;
}