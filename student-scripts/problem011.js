function deepFindAndCount(a, b) {
    var licznik = 0;

    for (var i = 0; i < a.length; i++) {

        if (Array.isArray(a[i])) {
            licznik+=deepFindAndCount(a[i], b);
        }
        else if (a[i] == b) {
            licznik++;
        }
    }

    return licznik;
}