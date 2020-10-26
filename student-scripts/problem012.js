function objectsDiff(a, b) {
    var wynik = [];

    var kluczeA = Object.keys(a);
    var kluczeB = Object.keys(b);

    //console.log("Klucze a: " + kluczeA);
    //console.log("Klucze b: " + kluczeB);

    for (var i = 0; i < kluczeA.length; i++) {
        if (kluczeB.includes(kluczeA[i]) == false) wynik.push(kluczeA[i]);
    }

    for (var i = 0; i < kluczeB.length; i++) {
        if (kluczeA.includes(kluczeB[i]) == false) wynik.push(kluczeB[i]);
    }


    return wynik;
}